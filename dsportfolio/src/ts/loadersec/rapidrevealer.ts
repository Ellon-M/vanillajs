import { gsap } from 'gsap';

interface DOMEl {
    el: Element;
    img: any
}

interface OptionsObj {
    duration: number;
    panelDelay: number
}

class ImageLayer {
    DOM: DOMEl;

    constructor(el: Element) {
        this.DOM = {el: el, img: undefined};
        this.DOM.img = this.DOM.el.querySelector('.layers__item-img');
    }
}

export class Revealer {
    layers!: Array<ImageLayer>;
    DOM;
    layersTotal;
    options: OptionsObj;
    tl!: GSAPTimeline;


    constructor() {
        this.DOM = {main: undefined};
        this.layers = [];
        [...document.querySelectorAll('.layers__item')].forEach(item => this.layers.push(new ImageLayer(item)));
        this.layersTotal = this.layers.length;
        this.options = {
            duration: 1,
            panelDelay: 0.15
        };
        this.createTimeline();
    }

    createTimeline() {
        this.tl = gsap.timeline({paused: true, onComplete: () => window.location.assign('/projects')});

        for (let i = 0, len = this.layersTotal; i <= len-1; ++i) {
            this.tl.to([this.layers[i].DOM.el, this.layers[i].DOM.img], {
                duration: this.options.duration,
                ease: 'Power2.easeInOut',
                y: 0
            }, this.options.panelDelay * i)
        }

        this.tl.addLabel('halfway', this.options.panelDelay*(this.layersTotal-1) + this.options.duration)
        .call(() => {
            this.layers.filter((_, pos) => pos != this.layers.length-1).forEach((panel, pos) => {
                gsap.set(panel.DOM.el, {opacity: 0});
            });
        }, [this, 'halfway'])
        .to([this.layers[this.layersTotal-1].DOM.el, this.layers[this.layersTotal-1].DOM.img], {
            duration: this.options.duration,
            ease: 'Expo.easeInOut',
            y: (index) => index ? '101%' : '-101%'
        }, 'halfway')
    }

    reveal() {
        this.tl.restart();
    }
}

const revealer = new Revealer();
let link = document.querySelector('.projects-link') as HTMLElement;
link.addEventListener('click', () => {
    revealer.reveal();
})

