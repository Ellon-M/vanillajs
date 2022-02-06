import { gsap } from 'gsap';
import { wrapElements } from '../utils';
import { wrap } from 'gsap/gsap-core';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

// initialize Splitting
Splitting({});

interface DOMElements {
    el: HTMLElement;
    homeText: any;
    homeChars: any;
    homeTextSub: any;
    homeCharsSub: any;
    homeCharsSubB: any;
}

export class HomeItem {
    DOM!: DOMElements;
    tl!: gsap.core.Timeline;

    constructor(el:HTMLElement) {
        this.DOM = {el: el, homeChars: undefined, homeText: undefined, homeTextSub: null, homeCharsSub: undefined, homeCharsSubB: undefined};
        this.DOM.homeText = this.DOM.el.querySelector('.f-word');
        this.DOM.homeTextSub = this.DOM.el.querySelector('.f-word-sub');
        this.textLayout();
        this.initEvent();
    }

    initEvent() {
        window.addEventListener('load', (e) => 
            this.play());
    }

    textLayout() {
        this.DOM.homeText = this.DOM.el.querySelector('.f-word');
        // gsap.set(this.DOM.homeText, {visibility: 'hidden'});
        this.DOM.homeChars = [...this.DOM.homeText.querySelectorAll('.f-char')];
        this.DOM.homeCharsSub = [...this.DOM.homeTextSub.querySelectorAll('.f-char-it')];
        this.DOM.homeCharsSubB = [...this.DOM.homeTextSub.querySelectorAll('.f-char-it-b')];
        wrapElements(this.DOM.homeChars, 'span', 'home-char-wrap');
        wrapElements(this.DOM.homeCharsSub, 'span', 'home-char-wrap-sub');
    }

    play() {
        this.tl = gsap.timeline()
        .addLabel('load', 0)
        .from(this.DOM.homeText, {
            visibility: 'hidden',
        }, 'load')
        .from(this.DOM.homeTextSub, {
            visibility: 'hidden',
        }, 'load')
        .set(this.DOM.homeText, {
            x: '-7%',
            ease: 'quad.in',
            visibility: 'visible',
        }, 'load+=0.2')
        .to(this.DOM.homeChars, {
            duration: 1.58,
            ease: 'expo',
            startAt: {x: '106%'},
            x: '0%',
            visibility: 'visible',
        }, 'load+=0.2')
        .set(this.DOM.homeTextSub, {
            x: '-7%',
            ease: 'quad.in',
            visibility: 'visible',
        }, 'load+=0.22')
        .to(this.DOM.homeCharsSub, {
            duration: 1.58,
            ease: 'expo',
            startAt: {x: '103%'},
            x: '0%',
            visibility: 'visible',
        }, 'load+=0.22')
    }

}