import { gsap } from 'gsap';


interface DOMEls {
    marquee: any;
    top: any;
}

export class Showcase {
    DOM!: DOMEls;
    marqueeItem;
    tl!: GSAPTimeline

    constructor() {
        this.DOM = {marquee: document.querySelector('.projects-marquee-main'), top: document.querySelector('.projects-page-top')};
        this.marqueeItem = this.DOM.marquee.querySelectorAll('span');
        console.log(this.marqueeItem);
        requestAnimationFrame(() => this.play());
    }

    play() {
            const itemWidth = this.marqueeItem[0].offsetWidth;
            const wrapWidth = ((gsap.utils.toArray(this.marqueeItem).length - 1) * itemWidth);
            console.log(wrapWidth);
            this.tl = gsap.timeline()
            .to(this.DOM.top, {
                startAt: {opacity: 0},
                ease: 'quad.in',
                duration: .5,
                opacity: 1
            })
            .to(this.DOM.marquee, {
                startAt: {opacity: 0, yPercent: -40},
                ease: 'power3',
                duration: .8,
                opacity: 1,
                yPercent: 0,
                delay: .4,
            })
            .to(this.DOM.marquee, {
                x: "+=" + (-wrapWidth + itemWidth),
                ease: 'none',
                duration: 3.5, 
                repeat: -1, 
                modifiers: {
                    x: gsap.utils.unitize( gsap.utils.wrap(-itemWidth, wrapWidth))  
                }           
            }, '<')
    }
}

new Showcase();