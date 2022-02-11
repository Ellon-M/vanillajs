import { HomeItem } from './homeitem';
import {preloadFonts, preloadImages} from '../utils';

Promise.all([preloadImages('.rotating-img .f',), preloadFonts()]).then(() => {
    // loader 
})

new HomeItem(document.querySelector('.f-top > .f-splitted') as HTMLElement);

new HomeItem(document.querySelector('.f-b-splitted') as HTMLElement);

// const navLists = [...document.querySelectorAll('.f-nav-li')]
// navLists.forEach((list: any) => new HomeItem(list));



