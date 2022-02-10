(function() {
    var lineMaker = new LineMaker({
            // position: if fixed the lines container will have fixed position.
            position: 'fixed',
            // The lines settings:
            // 
            // top, left, width, height: numerical for pixels or string for % and viewport units. Examples: 2 || '20%' || '50vw'.
            // color: the (bg)color of the line.
            // hidden: defines if the line is rendered initially or hidden by default.
            // animation: animation properties for the line
            // 		duration: animation speed.
            // 		easing: animation easing (animejs easing. To see all possible values console animejs.easings).
            // 		delay: animation delay.
            // 		direction: line animation direction. Possible values: TopBottom || BottomTop || LeftRight || RightLeft || CenterV || CenterH.
            lines: [
                {top: 30, left: '10%', width: 1, height: '100vh', color: '#0022FF', hidden: true, animation: { duration: 3000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
                {top: 30, left: '30%', width: 1, height: '100vh', color: '#FDFAF3', hidden: true, animation: { duration: 3000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
                {top: 30, left: '50%', width: 1, height: '100vh', color: '#0022FF', hidden: true, animation: { duration: 3000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
                {top: 30, left: '70%', width: 1, height: '100vh', color: '#FDFAF3', hidden: true, animation: { duration: 3000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
                {top: 30, left: '90%', width: 1, height: '100vh', color: '#0022FF', hidden: true, animation: { duration: 3000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }},
            ]
    });

    let section = document.querySelector('.projects');

    const showLines = (entry) => {
            if (entry[0].isIntersecting) {
                console.log(entry);
                setTimeout(function() {
                    lineMaker.animateLinesIn(lineMaker.getTotalLines()-1);
                }, 300);
            }
    }
      
    let options = {
        rootMargin: '-10%',
        threshold: 0.0
    }

    let linesObserver = new IntersectionObserver(showLines, options);
    linesObserver.observe(section);

    })();