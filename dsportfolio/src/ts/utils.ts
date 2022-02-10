var WebFont = require('webfontloader');
const imagesLoaded = require('imagesLoaded');

// preload fonts
const preloadFonts = () => {
    return new Promise((resolve) => {
        WebFont.load({
            custom: {
                families: [ 'OmniglotFont','Nolluqa']
              },
            google: {
                families: ['Open Sans', 'Oxygen']
            },
            active: resolve
        });
    });
};


// Preload images
const preloadImages = (selector: string) => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};


const { PI, cos, sin, abs, sqrt, pow, round, random, atan2 } = Math;

const HALF_PI = 0.5 * PI;
const TAU = 2 * PI;
const TO_RAD = PI / 180;


const floor = (n: number) => n | 0;


const rand = (n: number) => n * random();


const randIn = (min: number, max: number) => rand(max - min) + min;


const randRange = (n: number) => n - rand(2 * n);


const fadeIn = (t: number, m: number) => t / m;


const fadeOut = (t: number, m: number) => (m - t) / m;


const fadeInOut = (t: number, m: number) => {
	let hm = 0.5 * m;
	return abs((t + hm) % m - hm) / (hm);
};


const dist = (x1: number, y1: number, x2: number, y2: number) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));


const angle = (x1: number, y1: number, x2: number, y2: number) => atan2(y2 - y1, x2 - x1);


const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;


const lineEquation = (y2: number, y1: number, x2: number, x1: number, currentVal: number) => {
    // y = mx + b 
    var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
    return m * currentVal + b;
};


const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};


const getMousePos = (e: MouseEvent) => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};


const distance = (x1:number,y1:number,x2:number,y2:number) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
}


const getRandomFloat = (min:number, max:number) => (Math.random() * (max - min) + min).toFixed(2);

// Clamps a value between an upper and lower bound
const clamp = (num: number, min: number, max: number) => num <= min ? min : num >= max ? max : num;

// Map number x from range [a, b] to [c, d]
const map = (x: number, a: number, b: number, c: number, d: number) => clamp((x - a) * (d - c) / (b - a) + c, Math.min(c,d), Math.max(c,d));


const wrapElements = (elems:Array<Node>, wrapType: string, wrapClass:string) => {
    elems.forEach(char => {
          // add a wrap for every char (overflow hidden)
          const wrapEl = document.createElement(wrapType);
          wrapEl.classList.value = wrapClass;
          if (char.parentNode) char.parentNode.appendChild(wrapEl);
          wrapEl.appendChild(char);
      });
}

export { 
    preloadFonts,
    preloadImages,
    floor,
    rand,
    randIn,
    randRange,
    fadeIn,
    fadeOut,
    fadeInOut,
    angle,
    HALF_PI,
    cos,
    sin,
    lerp, 
    lineEquation,
    calcWinsize, 
    getMousePos,
    distance,
    getRandomFloat,
    map,
    wrapElements
};


