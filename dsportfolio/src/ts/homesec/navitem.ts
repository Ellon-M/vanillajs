import { gsap } from 'gsap';


interface DOMEls {
    el: Element;
    link: any;
    homeText: any;
    homeChars: any;
    homeTextSub: any;
    homeCharsSub: any;
}

export class NavLink {
    DOM!: DOMEls;
    outTl!: gsap.core.Timeline;

    constructor(el: Element) {
        this.DOM = {el: el, link: undefined, homeChars: undefined, homeText: undefined, homeTextSub: null, homeCharsSub: undefined};
        this.DOM.link = this.DOM.el.querySelector('.f-nav-link');
        this.DOM.homeText = document.querySelector('.f-word');
        this.DOM.homeTextSub = document.querySelector('.f-word-sub');
        this.DOM.homeChars = [...document.querySelectorAll('.f-char')];
        this.DOM.homeCharsSub = [...document.querySelectorAll('.f-char-it')];
        console.log(this.DOM.homeChars);
        this.initEvent();
    }

    initEvent() {
        this.DOM.link.addEventListener('click', () => this.navigate());
    }

    navigate() {
            this.outTl = gsap.timeline({onComplete: () =>
            window.location.assign('/' + this.DOM.link.id)})
            .addLabel('nav', 0)
            .from(this.DOM.homeText, {
                visibility: 'visible',
            }, 'nav')
            .from(this.DOM.homeTextSub, {
                visibility: 'visible',
            }, 'nav')
            .to(this.DOM.homeChars, {
                duration: 1.58,
                ease: 'expo',
                startAt: {x: '0%'},
                x: '105%',
                onStart: () => {setTimeout(() => {gsap.to(this.DOM.homeChars, {visibility: 'hidden'})}, 600);
                setTimeout(() => {gsap.to(document.body, {
                    stagger: .5,
                    opacity: 0,
                    ease: 'power3',
                        })
                    }, 900)
                }
            }, 'nav+=0.2')
            .to(this.DOM.homeCharsSub, {
                duration: 1.58,
                ease: 'expo',
                startAt: {x: '0%'},
                x: '105%',
            }, 'nav+=0.22')
    }
}

const links = [...document.querySelectorAll('.f-nav-li')];
links.forEach((link: any) => {
    new NavLink(link);
})