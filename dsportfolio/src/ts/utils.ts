var WebFont = require('webfontloader');

// preload fonts
const preloadFonts = (id:any) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

// Linear interpolation
const lerp = (a:number, b:number, n:number) => (1 - n) * a + n * b;


// window size calculation
const calcWinsize = () => {
    return {width: window.innerWidth, height: window.innerHeight};
};


// Gets the mouse position
const getMousePos = (e: MouseEvent) => {
    return { 
        x : e.clientX, 
        y : e.clientY 
    };
};


// distance measurement
const distance = (x1:number,y1:number,x2:number,y2:number) => {
    var a = x1 - x2;
    var b = y1 - y2;

    return Math.hypot(a,b);
}


// Generate a random float.
const getRandomFloat = (min:number, max:number) => (Math.random() * (max - min) + min).toFixed(2);


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
    lerp, 
    calcWinsize, 
    getMousePos,
    distance,
    getRandomFloat,
    wrapElements
};


