const about = `
<div class="loader">
            <marquee direction="right" scrollamount="10"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, modi.</marquee
            >
            <marquee direction="left" scrollamount="30"
                >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Itaque, cupiditate?</marquee
            >
            <marquee direction="right" scrollamount="20"
                >Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quo.</marquee
            >
            <marquee direction="" scrollamount="40"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, dolorem.</marquee
            >
            <div class="intro">
                <h1 class="intro-title">ディスカバー</h1>
            </div>
</div>
        
    <svg class="cursor" width="80" height="80" viewBox="0 0 80 80">
        <defs>
            <filter id="filter-1" x="-50%" y="-50%" width="200%" height="200%" 
            filterUnits="objectBoundingBox">
                <feTurbulence type="fractalNoise" baseFrequency="0.02 0.15" numOctaves="3" result="warp" />
                <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="0" in="SourceGraphic" in2="warp" />
            </filter>
    </defs>
    <circle class="cursor__inner" cx="40" cy="40" r="20"/>
    </svg>

    <div class='about-body'>
    <h1 class='abt-placeholder'>A</h1>
    </div>
`;
