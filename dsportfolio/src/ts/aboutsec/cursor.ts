import { gsap } from 'gsap';
import { map, calcWinsize, lerp, getMousePos } from '../utils';
import { EventEmitter } from 'events';


interface DOMElements {
    el: HTMLElement;
    style: CSSObj;
    circleInner: any;
    feDisplacementMap: any;
}

interface CSSObj {
    opacity?: number;
}

interface RenderedObjVal {
    previous: number;
    current: number;
    amt: number;
}

interface RenderedObj {
    [key: string ]: RenderedObjVal;
}

let winsize = calcWinsize();
window.addEventListener('resize', () => {
    winsize = calcWinsize();
});

let mouse = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

export class Cursor extends EventEmitter {
    DOM: DOMElements;
    bounds: DOMRect;
    renderedStyles: RenderedObj;
    onMouseMoveEv;
    filterId: string;
    primitiveValues;
    tl!: GSAPTimeline;

    constructor(el:HTMLElement) {

        super();
        this.DOM = {el: el, style: {opacity: 0}, circleInner: undefined, feDisplacementMap: undefined};
        this.DOM.el.style.opacity;
        this.DOM.circleInner = this.DOM.el.querySelector('.cursor__inner');
        this.filterId = '#filter-1';
        this.DOM.feDisplacementMap = document.querySelector(`${this.filterId} > feDisplacementMap`);
        this.primitiveValues = {scale: 0};
        this.bounds = this.DOM.el.getBoundingClientRect();
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1},
            scale: {previous: 1, current: 1, amt: 0.15},
        };
        this.createTimeline();
        this.listen();
        this.onMouseMoveEv = () => {
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width/2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height/2;
            gsap.to(this.DOM.el, {duration: 0.95, ease: 'Power3.easeOut', opacity: 1});
            requestAnimationFrame(() => this.render());
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
    }

    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width/2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height/2;

        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }
                    
        this.DOM.el.style.transform = `translateX(${(this.renderedStyles['tx'].previous)}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;

        requestAnimationFrame(() => this.render());
    }

    createTimeline() {
        this.tl = gsap.timeline({
            paused: true,
            onStart: () => {
                this.DOM.circleInner.style.filter = `url(${this.filterId})`;
            },
            onUpdate: () => {
                this.DOM.feDisplacementMap.scale.baseVal = this.primitiveValues.scale;
            },
            onComplete: () => {
                this.DOM.circleInner.style.filter = 'none';
            }
        })
        .to(this.primitiveValues, { 
            duration: 0.1,
            ease: 'Expo.easeOut',
            startAt: {scale: 0},
            scale: 150
        })
        .to(this.primitiveValues, { 
            duration: 0.6,
            ease: 'Power3.easeOut',
            scale: 0
        });
    }

    enter() {
        this.renderedStyles['scale'].current = 1.5;
        this.tl.restart();
    }

    leave() {
        this.renderedStyles['scale'].current = 1;
        this.tl.progress(1).kill();
    }

    listen() {
        this.on('enter', () => this.enter());
        this.on('leave', () => this.leave());
    }
}