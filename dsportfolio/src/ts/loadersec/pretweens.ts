import { gsap } from 'gsap';
import anime from 'animejs/lib/anime.es.js';


var textWrapper = document.querySelector(".intro-title") as Element;

if (textWrapper.textContent) {
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);
}

// anime timeline
var tl: any;
tl = anime.timeline({ loop: false })
tl.add({
    targets: ".loader .intro-title",
    opacity: [0, 1],
    easing: 'easeInSine',
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1300,
        delay: function(el:any, i:any) {
            return 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 800,
        delay: function(el:any, i:any) {
            return 40 + 50 * i;
        }
    });


// greensock curtain
gsap.to(".loader", {
    top: "-100%",
    delay: 3.5,
    ease: "power2.inOut"
});

