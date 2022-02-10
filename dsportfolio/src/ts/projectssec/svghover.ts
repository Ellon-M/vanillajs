import { getMousePos, lerp, lineEquation, distance } from "../utils";
import { gsap } from 'gsap';

const feDisplacementMapEl = document.querySelector('#distortionFilter feDisplacementMap') as SVGFEDisplacementMapElement;


interface DOMEls {
    svg: any;
    img: any;
    link: any;
} 

interface WinsizeObj {
    width: number,
    height: number
}

interface MousePosObj {
    x: number;
    y: number
}

interface LastMousePosObj {
    translation: MousePosObj;
    displacement: MousePosObj
}


let winsize: WinsizeObj;
const calcWinsize = () => winsize = {width: window.innerWidth, height: window.innerHeight};
calcWinsize();
window.addEventListener('resize', calcWinsize);

export class DistortOnHover {
    DOM: DOMEls;
    mousePos: MousePosObj;
    lastMousePos: LastMousePosObj;
    dmScale;
    current;


    constructor() {
        this.DOM = {svg: document.querySelector('svg.distort'), img: undefined, link: undefined };
        this.DOM.img = this.DOM.svg.querySelector('g image')
        this.DOM.link = document.querySelector('.projects-link');
        this.mousePos =  {x: winsize.width/2, y: winsize.height/2};
        this.lastMousePos =  {
            translation: {x: winsize.width/2, y: winsize.height/2},
            displacement: {x: 0, y: 0}
        };;
        this.dmScale = 0;
        this.current = -1;
        this.initEvents();
        requestAnimationFrame(() => this.render());

    }

    initEvents() {
        window.addEventListener('mousemove', ev => this.mousePos = getMousePos(ev));
        const prLetters = [...document.querySelectorAll('.projects-centre-letter')];
        
        const mouseenterFn = () => {
            gsap.to(this.DOM.img, {
                ease: "quad.out", 
                opacity: 1,
                duration: 0.5
            });

            gsap.to(prLetters, {
                ease: "sine.inout",
                startAt: {opacity: 1, y: 0},
                y: this.lastMousePos.translation.y < this.mousePos.y ? 25 : -25,
                opacity: 0,
                duration: .18,
                yoyo: true,
                yoyoEase: "expo.inOut",
                repeat: 1,
                stagger: {
                    grid: [1, prLetters.length],
                    from: this.lastMousePos.translation.x < this.mousePos.x ? 'start' : 'end',
                    amount: 0.12
                }
            });
        }

        const mouseleaveFn = () => {
            gsap.to(this.DOM.img, {ease:"quad.inOut", opacity: 0, duration: 0.5});
        };

        this.DOM.link.addEventListener('mouseenter', mouseenterFn);
        this.DOM.link.addEventListener('mouseleave', mouseleaveFn);
    }

    render() {
        this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.15);
        this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.15);
        this.DOM.svg.style.transform = `translateX(${(this.lastMousePos.translation.x-winsize.width/2)}px) translateY(${this.lastMousePos.translation.y-winsize.height/2}px)`;

        this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.07);
        this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.07);
        const mouseDistance = distance(this.lastMousePos.displacement.x, this.lastMousePos.displacement.y, this.mousePos.x, this.mousePos.y);
        this.dmScale = Math.min(lineEquation(50, 0, 100, 0, mouseDistance), 50);
        feDisplacementMapEl.scale.baseVal = this.dmScale;

        requestAnimationFrame(() => this.render());
    }
}

new DistortOnHover();