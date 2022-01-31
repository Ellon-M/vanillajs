import { gsap } from 'gsap';
import { MagneticFx }  from './magneticfx';
import { calcWinsize, wrapElements } from '../utils';
import { wrap } from 'gsap/gsap-core';

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

// initialize Splitting
const splitting = Splitting({});

// Calculate the viewport size
let winsize = calcWinsize();
window.addEventListener('resize', () => winsize = calcWinsize());


const aboutEl = document.querySelectorAll('.about-section');

interface DOMElements {
    el: Element,
    enterAction:any,
    enterActionSVGCircle:any,
    abtText:any,
    itemAbtChars:any,
    linkWrap:any,
    link:any,
}


export class AboutItem {
    DOM!: DOMElements;
    abtArr;
    magneticFx; // the circle magnetic functionality
    timelineHoverOut!: gsap.core.Timeline;
    timelineHoverIn!: gsap.core.Timeline;

    constructor (el:Element, abtArr:Array<any>) {
        this.DOM = { el: el, enterAction: undefined, enterActionSVGCircle: undefined,  abtText: undefined, itemAbtChars: undefined, linkWrap: undefined, link: undefined };
        this.abtArr = abtArr;
        this.DOM.enterAction = this.DOM.el.querySelector('.item_enter');
        this.DOM.enterActionSVGCircle = this.DOM.enterAction.querySelector('circle');
        gsap.set(this.DOM.enterActionSVGCircle, {transformOrigin: '50% 50%'});
        this.magneticFx = new MagneticFx(this.DOM.enterAction);
        this.editTextLayout();
        this.DOM.linkWrap = this.DOM.el.querySelector('.about-link-wrap');
        this.DOM.link = this.DOM.linkWrap.querySelector('.about-link');
        this.initEvents();
    }

    editTextLayout() {
        this.DOM.abtText = this.DOM.el.querySelector('.about-text-wrap');
        this.DOM.itemAbtChars = [...this.DOM.abtText.querySelectorAll('.char')];
        wrapElements(this.DOM.itemAbtChars, 'span', 'char-wrap');
    }

    initEvents() {
        this.DOM.enterAction.addEventListener('mouseenter', () => this.onMouseEnter());
        this.DOM.enterAction.addEventListener('mouseleave', () => this.onMouseLeave());
        this.DOM.enterAction.addEventListener('click', () => this.open());
        this.DOM.link.addEventListener('mouseenter', () => this.onMouseEnter());
        this.DOM.link.addEventListener('mouseleave', () => this.onMouseLeave());
        this.DOM.link.addEventListener('click', () => this.open());
    }

    onMouseEnter() {
        if( this.timelineHoverOut ) this.timelineHoverOut.kill();
        this.timelineHoverIn = gsap.timeline()
        .addLabel('start', 0)
        .to(this.DOM.enterActionSVGCircle, {
            duration: 0.8,
            ease: 'power3',
            scale: 1.1
        }, 'start')
        .to(this.DOM.itemAbtChars, {
            duration: 0.2,
            ease: 'quad.in',
            x:'-103%'
        }, 'start')
        .set(this.DOM.abtText, {
            x:'-12%',
        }, 'start+=0.2')
        .to(this.DOM.itemAbtChars, {
            duration: 0.7,
            ease: 'expo',
            startAt: {x: '103%'},
            x: '0%'
        }, 'start+=0.2');
    }

    onMouseLeave() {
        if( this.timelineHoverIn ) this.timelineHoverIn.kill();
        
        this.timelineHoverOut = gsap.timeline()
        .addLabel('start', 0)
        .to(this.DOM.enterAction, {
            duration: 0.8,
            ease: 'power3',
            x: 0,
            y: 0
        }, 'start')
        .to(this.DOM.enterActionSVGCircle, {
            duration: 0.8,
            ease: 'power3',
            scale: 1
        }, 'start')
        .to(this.DOM.itemAbtChars, {
            duration: 0.2,
            ease: 'quad.in',
            x:'103%',
        }, 'start')
        .set(this.DOM.abtText, {
            x: '0%',
        }, 'start+=0.2')
        .to(this.DOM.itemAbtChars, {
            duration: 0.7,
            ease: 'expo',
            startAt: {x:'-103%'},
            x: '0%'
        }, 'start+=0.2');
    }

    open() {

    }

}

