import { Cursor } from './cursor';
import { AboutItem }  from './aboutitem';

// initialize custom cursor
const cursor = new Cursor(document.querySelector('.cursor') as HTMLElement);

let itemsArr: Array<any> = [];
[...document.querySelectorAll('.mid-text > .about-item')].forEach(item => itemsArr.push(new AboutItem(item, itemsArr)));
console.log(itemsArr);

// mouse effects on all links and others
[...document.querySelectorAll('a, .unbutton')].forEach(link => {
    link.addEventListener('mouseenter', () => cursor.enter());
    link.addEventListener('mouseleave', () => cursor.leave());
});

console.log('see me please');