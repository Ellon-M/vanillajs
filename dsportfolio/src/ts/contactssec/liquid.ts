import { gsap } from 'gsap';
import { MagneticFx }  from '../aboutsec/magneticfx';
import { getMousePos } from '../utils';

interface DOMEl {
    el: Element;
    link: any;
    mask: any;
    footerLink: any;
    footerMask: any;
    circle: any;
    footerCircle: any;
    footerMarquee: any;
}

export class Liquid {
    DOM: DOMEl;
    magneticFx;
    marqueeItem;

    constructor(el: Element) {
        this.DOM = {el: el, link: undefined, mask: undefined, footerLink: undefined, footerMask: undefined, footerCircle: undefined, circle: undefined, footerMarquee: undefined}
        this.DOM.link = document.querySelector('.contacts-button') as Element;
        this.DOM.footerLink = this.DOM.el;
        this.DOM.footerMask = this.DOM.footerLink.querySelector('.socials-circle-mask');
        this.DOM.circle = document.querySelector('#email-circle') as Element;
        this.DOM.footerCircle = this.DOM.footerLink.querySelector('.footer-circle');
        this.DOM.mask = document.querySelector('#email-circle-2');
        this.DOM.footerMarquee = document.querySelector('.footer-marquee');
        this.marqueeItem = this.DOM.footerMarquee.querySelectorAll('span');
        this.magneticFx = new MagneticFx(this.DOM.link);
        this.initEvents();
        this.playFooterMarquee();
    }

    initEvents() {
        window.addEventListener('mousemove', ev => getMousePos(ev));
        this.DOM.link.addEventListener('mouseenter', () => this.mouseEnter());
        this.DOM.link.addEventListener('mouseleave', () => this.mouseLeave());

        this.DOM.el.addEventListener('mouseenter', () => this.mouseEnterFooter()); 
        this.DOM.el.addEventListener('mouseleave', () => this.mouseLeaveFooter()); 
    }

    mouseEnter() {
        gsap.set(this.DOM.circle, {
            startAt: {fill: 'none'},
            fill: 'darkblue',
        })
        gsap.to(this.DOM.mask, {
            startAt: {opacity: 1, x: 87,  y: 80},
            opacity: 1,
            ease: 'sine.inout',
            duration: 1,
            y: -60,
            rotation: 10,
        })
    }

    mouseEnterFooter() {
            gsap.set(this.DOM.footerCircle, {
                startAt: {fill: 'none'},
                fill: 'darkblue'
            })
            gsap.to(this.DOM.footerMask, {
                startAt: {opacity: 1, x: 30, y: 40},
                opacity: 1,
                ease: 'power2',
                duration: 1,
                y: -20,
                rotation: 10,
            })
    }

    mouseLeave() {
        gsap.to(this.DOM.link, {
            duration: 0.8,
            ease: 'power3',
            x: 0,
            y: 0
        })
        gsap.to(this.DOM.mask, {
            startAt: {opacity: 1, y: -60},
            ease: 'sine.out',
            duration: .8,
            y: 80,
            rotation: 0,
            onComplete: () => {gsap.set(this.DOM.circle, {fill: 'none'})}
        })
    }

    mouseLeaveFooter() {
            gsap.to(this.DOM.footerMask, {
                startAt: {opacity: 1, y: 0},
                ease: 'power2',
                duration: 1,
                y: 40,
                rotation: 0,
                onComplete: () => {gsap.set(this.DOM.footerCircle, {fill: 'none'})}
            })
    }

    playFooterMarquee() {
        const itemWidth = this.marqueeItem[0].offsetWidth;
        const wrapWidth = ((gsap.utils.toArray(this.marqueeItem).length - 1) * itemWidth);
        console.log((gsap.utils.toArray(this.marqueeItem).length))

        gsap.to(this.DOM.footerMarquee, {
            x: "+=" + ((-wrapWidth/2) + itemWidth),
            ease: 'none',
            duration: 9, 
            repeat: -1, 
            modifiers: {
                x: gsap.utils.unitize( gsap.utils.wrap(itemWidth, -wrapWidth*2))  
            }           
        })
    }
}


const linkItems = [...document.querySelectorAll('.contacts-footer-btn')];
linkItems.forEach((item) => {
    new Liquid(item);
})
