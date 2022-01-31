import { gsap } from 'gsap';
import { lerp, getMousePos, calcWinsize } from '../utils';

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());

// Track the mouse position
let mousepos = {x: 0, y: 0};
window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));

interface ScrollObj {
    x: number;
    y: number;
}

interface RenderedObjVal {
    previous: number;
    current: number;
    amt: number;
}

interface RenderedObj {
    [key: string ]: RenderedObjVal
}

export class MagneticFx {
    DOM; // DOM elements
    renderedStyles: RenderedObj;  // button scale/translation
    scrollVal!: ScrollObj;    // current scroll
    rect!: DOMRect; 
    requestId: number | undefined;

    constructor(el:HTMLElement) {
        this.DOM = {el: el}; 
        this.renderedStyles = {
            tx: {previous: 0, current: 0, amt: 0.1},
            ty: {previous: 0, current: 0, amt: 0.1}
        };
        this.calculateSizePosition();
        this.initEvents();
    }

    calculateSizePosition () {
        this.scrollVal = {x: window.scrollX, y: window.scrollY};
        this.rect = this.DOM.el.getBoundingClientRect();
    }

    initEvents() {
        window.addEventListener('resize', () => this.calculateSizePosition());

        this.DOM.el.addEventListener('mouseenter', () => {
            // start the render loop animation (rAF)
            this.loopRender();
        });
        this.DOM.el.addEventListener('mouseleave', () => {
            // stop the render loop animation (rAF)
            this.stopRendering();
            this.renderedStyles['tx'].previous = this.renderedStyles['ty'].previous = 0;
        });
    }

    // start the render loop animation (rAF)
    loopRender() {
        if ( !this.requestId ) {
            this.requestId = requestAnimationFrame(() => this.render());
        }
    }

      // stop the render loop animation (rAF)
      stopRendering() {
        if ( this.requestId ) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    }
    render() {
        this.requestId = undefined;

        const scrollDiff = {
            x: this.scrollVal.x - window.scrollX,
            y: this.scrollVal.y - window.scrollY
        };
        
        // new values for the translations and scale
        this.renderedStyles['tx'].current = (mousepos.x - (scrollDiff.x + this.rect.left + this.rect.width/2))*.3;
        this.renderedStyles['ty'].current = (mousepos.y - (scrollDiff.y + this.rect.top + this.rect.height/2))*.3;
        
        for (const key in this.renderedStyles) {
            this.renderedStyles[key].previous = lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        }
        
        gsap.set(this.DOM.el, {
            x: this.renderedStyles['tx'].previous,
            y: this.renderedStyles['ty'].previous
        })

        this.loopRender();
    }
}