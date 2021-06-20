const wordEl = document.getElementById('word');
const wronglettersEl = document.getElementById('wrong-letters');
const playbtn = document.getElementById('start-button');
const playAgainBtn = document.getElementById('play-button');
const startGame = document.getElementById('game-container');
const startPopup = document.getElementById('start-popup-container');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const finalMessageRevealWord = document.getElementById('final-message-reveal-word');
const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard', 'lol'];

let selectedWord = words[Math.floor(Math.random() *  words.length)];
let playable = false;

playbtn.addEventListener('click', () => {
  startGame.style.display = 'flex';
  playable = true;
  startPopup.style.display = 'none';
})  



const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    wordEl.innerHTML = `
    
    ${selectedWord  .split('')
                    .map(  
                         letter => `
                <span class="letter">${correctLetters.includes(letter) ? letter : ''}
                </span>
                  `)
                  .join('')
                    }`;

    const innerWord = wordEl.innerText.replace(/[ \n]/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won! 😃';
        popup.style.display = 'flex';
        
        playable = false;
    } 
  }
//update the wrong letters
function updateWrongLettersEl() {
//display the wrong letters
  wronglettersEl.innerHTML = `
  ${wrongLetters.length > 0 ? '<p>Wrong Letters</p>' : ''}
  ${wrongLetters.map(letter => `<span>${letter}</span>`)}
  `;

    figureParts.forEach((part, index) => {
           const errors = wrongLetters.length;

           if (index < errors) {
             part.style.display = "block";
           }
          else {
             part.style.display = "none";
          }

    }
    );
    if (wrongLetters.length === figureParts.length) {
       finalMessage.innerText = "Unfortunately you lost. 😕";
       finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
       popup.style.display = 'flex';

       playable =false;
    }
}

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key.toLowerCase();
        if (selectedWord.includes(letter)) {
             if (!correctLetters.includes(letter)) {
               correctLetters.push(letter);

               displayWord();
             }
             else {
               showNotification();
             }
           } else {
          if (!wrongLetters.includes(letter)) {
              wrongLetters.push(letter);

              updateWrongLettersEl();
          }
          else {
            showNotification();
          }
        }

  }

});

//Restart game
playAgainBtn.addEventListener('click', () => {
  playable = true;

  //Empty arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);

  selectedWord = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popup.style.display = 'none';
  
});

displayWord();