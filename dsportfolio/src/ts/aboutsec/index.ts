import { Cursor } from './cursor';
import { AboutItem }  from './aboutitem';


let abtText = [...document.querySelectorAll('.about-text-wrap, .myself-text-wrap, .shortly-text-wrap, .about-link')];

const showText = (entries: any) => {
    entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
            let letters = [...entry.target.querySelectorAll('.abt-letter')]
            letters.forEach((letter, idx) => {
                setTimeout(() => {
                    letter.classList.add('active');
                }, idx * 120);
            })
        }
    })
}


let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

let textObserver = new IntersectionObserver(showText, options);



abtText.forEach((text) => {
    textObserver.observe(text);
})


const cursor = new Cursor(document.querySelector('.cursor') as HTMLElement);

let itemsArr: Array<any> = [];
[...document.querySelectorAll('.mid-text')].forEach(item => itemsArr.push(new AboutItem(item, itemsArr)));

// itemsArr.map(item=> console.log(item.DOM.el));

[...document.querySelectorAll('a, .unbutton')].forEach(link => {
    link.addEventListener('mouseenter', () => cursor.emit('enter'));
    link.addEventListener('mouseleave', () => cursor.emit('leave'));
});

