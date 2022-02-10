const home = `
<div class='outer-home'>
  <div class='f'>
    <section class='f-sec'>
      <div class="f-top">
        <div class="f-splitted">
          <div id="f-word-bottom" class="f-word">
            <span data-splitting class="f-char">E</span>
            <span data-splitting class="f-char">L</span>
            <span data-splitting class="f-char">L</span>
            <span data-splitting class="f-char" id="f-char-s">O</span>
            <span data-splitting class="f-char">N</span>
          </div>
          <div class="f-word-sub">
            <span data-splittling id="f-char-it" class="f-char-it">モ</span>
            <span data-splittling id="f-char-it" class="f-char-it">ル</span>
            <span data-splittling id="f-char-it" class="f-char-it">デ</span>
            <span data-splittling id="f-char-it" class="f-char-it">カ</span>
            <span data-splittling id="f-char-it" class="f-char-it">イ</span>
          </div>
        </div>

        <div class='f-nav-wrap'>
          <nav class='f-nav'>
            <ul class='f-nav-ul'>
                <li class='f-nav-li'><a href="" class="link f-nav-link" data-text="Home"><span>Home</span></a></li>
                
          
                <li class='f-nav-li'><a href="" class="link f-nav-link" data-text="About"><span>About</span></a></li>


                <li class='f-nav-li'><a href="" class="link f-nav-link" data-text="Projects"><span>Projects</span></a></li>

          
                <li class='f-nav-li'><a href="" class="link f-nav-link" data-text="Contacts"><span>Contacts</span></a></li>
            </ul>
          </nav>
          <div class='f-nav-theme-btns'>
            <button class='f-nav-theme-btn'>
            Dark theme
            </button>
            <button class='f-nav-theme-btn'>
            Light theme
            </button>
          </div>
        </div>
      </div>


       <div class='f-bottom'>
          <div class="f-bottom-left">
            Data <i>visualization</i>. Machine Learning. Generative art
              <div class='rotating-img-wrap'>
                <img src='https://res.cloudinary.com/denphvygd/image/upload/v1643980177/ds/w2d1_qit1yj.png' alt='spinning-text' class='rotating-img'/>
              </div>
          </div>
          <div class='f-b-splitted'>
            <span class='f-word'>
              <span data-splitting class='f-char'>D</span>
              <span data-splitting class='f-char'>A</span>
              <span data-splitting class='f-char'>T</span>
              <span data-splitting class='f-char'>A</span>
            </span>
            <span class='f-word-sub'>
              <span data-splitting class='f-char-it'>S</span>
              <span data-splitting class='f-char-it'>C</span>
              <span data-splitting class='f-char-it'>I</span>
              <span data-splitting class='f-char-it'>E</span>
              <span data-splitting class='f-char-it'>N</span>
              <span data-splitting class='f-char-it'>C</span>
              <span data-splitting class='f-char-it'>E</span>
            </span>
          </div>
       </div>
    </section>
  </div>
  <div class='about'>
    <div id="container"></div>
      <div class='about-section'>
        <div class="mid-text">
          <div class='about-item'>
            <div id="about-text-wrap" class="about-text-wrap">
              <div class="abt-text-wrap">
                <span data-splitting class='abt-letter' id="about-letter">A</span>
                <span data-splitting class='abt-letter' id="about-letter">B</span>
                <span data-splitting class='abt-letter' id="about-letter">O</span>
                <span data-splitting class='abt-letter' id="about-letter">U</span>
                <span data-splitting class='abt-letter' id="about-letter">T</span>
              </div>
              <div id="myself-text-wrap" class="myself-text-wrap">
                <span data-splitting class="abt-letter" id="about-letter">M</span>
                <span data-splitting class="abt-letter" id="about-letter">Y</span>
                <span data-splitting class="abt-letter" id="letter-it-s">S</span>
                <span data-splitting class="abt-letter" id="about-letter">E</span>
                <span data-splitting class="abt-letter" id="about-letter">L</span>
                <span data-splitting class="abt-letter" id="about-letter">F</span>
                <span data-splitting class="abt-letter" id="about-letter-comma">,</span>
            </div>
            <div id="shortly-text-wrap" class="shortly-text-wrap">
              <span class="abt-letter" data-splitting id="shortly-letter">S</span>
              <span class="abt-letter" data-splitting id="shortly-letter">H</span>
              <span class="abt-letter" data-splitting id="shortly-letter-it" class="shortly-letter">O</span>
              <span class="abt-letter" data-splitting id="shortly-letter">R</span>
              <span class="abt-letter" data-splitting id="shortly-letter">T</span>
              <span class="abt-letter" data-splitting id="shortly-letter">L</span>
              <span class="abt-letter" data-splitting id="shortly-letter">Y</span>
            </div>
          </div>
          <button class="item_enter unbutton">
            <svg class="item_enter-circle" vector-effect="non-scaling-stroke" width="800" height="800" viewBox="0 0 800 800">
            <circle class='magnetic-circ' vector-effect="non-scaling-stroke" cx="400" cy="400" r="150"/>
            </svg>
          </button>
          <div class="about-link-wrap">
            <a class="about-link" style="width: 300px; text-align: center">
              <span class="abt-letter">デ</span>
              <span class="abt-letter">ィ</span>
              <span class="abt-letter">ス</span>
              <span class="abt-letter">カ</span>
              <span class="abt-letter">バ</span>
              <span class="abt-letter">ー</span>
            </a>
          </div>
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

  </div>


  <div class='projects'>
    <div class='projects-top'>
    </div>
    <div class='projects-centre-text'>
      <h4 class='projects-centre-top'>マイ ワーク</h4>
      <svg class="distort" width="350" height="450" viewBox="0 0 350 450">
        <filter id="distortionFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="5" seed="2" stitchTiles="noStitch" x="0%" y="0%" width="100%" height="100%" result="noise"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"/>
        </filter>
        <g filter="url(#distortionFilter)">
          <image class="distort__img" x="50" y="50" xlink:href="https://res.cloudinary.com/denphvygd/image/upload/v1644245973/ds/phcirc_bzfgzd.jpg" height="300" width="250"/>
        </g>
      </svg>
      <div class='projects-centre-bottom'>
        <a class='projects-link'>
          <span class='projects-centre-letter' aria-hidden='true'>P</span>
          <span class='projects-centre-letter' aria-hidden='true'>R</span>
          <span class='projects-centre-letter' aria-hidden='true'>O</span>
          <span class='projects-centre-letter' aria-hidden='true'>J</span>
          <span class='projects-centre-letter' aria-hidden='true'>E</span>
          <span class='projects-centre-letter' aria-hidden='true'>C</span>
          <span class='projects-centre-letter' aria-hidden='true'>T</span>
          <span class='projects-centre-letter' aria-hidden='true'>S</span>
          </a>
      </div>
      <div class='projects-lower-text'>
          <p class='projects-lower-text-inner'>Considerable results of some data related work I've done in the past.</p> 
      </div>
    </div>
    <div class="layers">
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330574/ds/rapiddarksunglasses_or4nzu.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330577/ds/rapidmanga_v7omza.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644350065/ds/rapidredhair_jhl57c.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330579/ds/rapidnycishtower_sost1x.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644350064/ds/rapidcoveredeye_cxunv9.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330530/ds/rapidneonelec_v4kqiq.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330573/ds/rapidneon_tntmt8.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330571/ds/rapidcoderain_ojxux3.jpg')"></div>
      </div>
      <div class="layers__item">
        <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644330573/ds/rapidmacbook_vo6l8l.jpg')"></div>
      </div>
      <div class="layers__item">
      <div class="layers__item-img" style="background-image: url('https://res.cloudinary.com/denphvygd/image/upload/v1644352278/ds/rapidjpstreet_zd6ilf.jpg')"></div>
      </div>
    </div>
    <div class="projects-twin-lines">
        <svg height= "800" width="300" class='projects-side-line-top'>
          <line x1 ="60" y1="450" x2 ="105" y2 ="450"
          style="stroke: #FDFAF3; stroke-width:2;"/>
        </svg>
        <svg height= "850" width="300" class='projects-side-line-bottom'>
          <line x1 ="60" y1="475" x2 ="105" y2 ="475"
          style="stroke: #FDFAF3; stroke-width:2 ;"/>
        </svg>
    </div>
  </div>

  <div class="contacts">
    <div class="contacts-centre-text">
      <h3>Say Hello</h3>
    </div>
    <div class='contacts-buttons'>
      <button class='contacts-button'>
        <a href='' class='contacts-button-link'>
          <svg height="150" width="150" class='contacts-email-btn'>
            <circle cx="80" cy="80" r="60" id='email-circle' />
            <path fill="#121212" d="M44.3,-36.3C59.2,-16.7,74.3,1.8,71.7,17.7C69.2,33.6,49,46.8,27.8,56.4C6.7,66.1,-15.5,72.3,-32.3,65C-49,57.7,-60.3,37,-64.9,15.3C-69.4,-6.5,-67.3,-29.2,-55.4,-48.2C-43.5,-67.1,-21.7,-82.3,-3.5,-79.5C14.7,-76.7,29.5,-56,44.3,-36.3Z" transform="translate(100 100)" id='email-circle-2' />
            <text x="60" y="82">EMAIL</text>
            <circle cx="80" cy="80" r="60" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out'/>
          </svg>
        </a>
      </button>
    </div>
    <div class='contacts-lower'>
    <p class='contacts-lower-inner'>or reach me through... whichever manner you prefer</p>
    </div>
    <footer class='contacts-footer'>
      <div class='contacts-footer-socials-a'>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle' />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="19" y="33">WHA</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle' />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="22" y="33">TEL</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="22" y="33">INS</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="22" y="33">DIS</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="20" y="33">PHO</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle' />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="24" y="33">BE</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="20.5" y="33">DRB</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="22.5" y="33">LIN</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle' />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="20.5" y="33">KAG</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'/>
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="20" y="33">MED</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle'  />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="22" y="33">GIT</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" class='footer-circle' />
                <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
                <text x="21" y="33">STA</text>
                <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
      </div>
      <div class='contacts-footer-socials-b'>
        <svg height="60" width="60" class='contacts-footer-btn'>
          <circle cx="30" cy="30" r="20" class='footer-circle' />
          <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
          <text x="22" y="33">PIN</text>
          <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
              <circle cx="30" cy="30" r="20" class='footer-circle' />
              <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" fill="none" />
              <text x="20" y="33">SPO</text>
              <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
        <svg height="60" width="60" class='contacts-footer-btn'>
              <circle cx="30" cy="30" r="20" class='footer-circle' />
              <path fill="#121212" d="M21.4,11C13.8,25.5,-16,26,-23.2,11.6C-30.5,-2.8,-15.2,-31.9,-0.4,-32.1C14.5,-32.3,29,-3.6,21.4,11Z" class="socials-circle-mask" />
              <text x="20.5" y="33">WAT</text>
              <circle cx="30" cy="30" r="20" stroke="#FDFAF3" stroke-width="1" stroke-dasharray="2,4" fill="none" class='stroke-out' />
        </svg>
      </div>
    </footer>
  </div>
</div>

`;
