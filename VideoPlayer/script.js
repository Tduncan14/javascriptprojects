const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgain = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');


const figureParts = document.querySelectorAll('.figure-part');


const words = ["awesome",
    "bananas",
    "compute",
    "default",
    "example",
    "freedom",
    "giraffe",
    "harmony",
    "insight",
    "journey",
    "kingdom",
    "laptops",
    "meaning",
    "network",
    "offline",
    "package",
    "quality",
    "respect",
    "science",
    "treasure",
    "unicorn",
    "victory",
    "welcome",
    "zephyrs"]


let selectedWord = words[Math.floor(Math.random() * words.length)]


console.log(selectedWord)

const correctLetters = []

const wrongLetters = []


// update the wrong letters

function updateWrongLettersEl() {

    wrongLettersEl.innerHTML = `
      ${wrongLetters.length > 0 ? `<p>Wrong</p>` : ''}
      ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `


    figureParts.forEach((part, index) => {

        // Display wrong letters
        const errors = wrongLetters.length;


        // Display parts

        if (index < errors) {
            part.style.display = 'block';
        }
        else {
            part.style.display = 'none';
        }


    })
    // Check to see lost

    if (wrongLetters.length === figureParts.length) {

        finalMessage.innerText = 'You Lost :(';
        popup.style.display = 'flex';

    }


}


// show the notification

function showNotification() {
    notification.classList.add('show');


    setTimeout(() => {

        notification.classList.remove('show');

    }, 2000)

}


function displayWord() {

    wordEl.innerHTML = `
     ${selectedWord.split('').map(letter => `<span class="letter">${correctLetters.includes(letter) ? letter : '_'} </span>`).join('')}
     `;
    //  

    const innerWord = wordEl.innerText.replace(/\n/g, '');


    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You Won';
        popup.style.display = 'flex'
    }
}


// keydown letter press

window.addEventListener('keydown', e => {

    if (!(e.key >= 0 && e.key <= 9)) {
        console.log(e.key, 'hello')

        const letter = e.key


        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter)

                displayWord()
            }
            else {
                showNotification()
            }
        }
        else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter)



                updateWrongLettersEl()

            }

            else {
                showNotification()
            }
        }


    }


})


// Restart Game

playAgain.addEventListener('click', () => {

    // empty arrays

    correctLetters.splice(0);
    wrongLetters.splice(0);


    selectedWord = words[Math.floor(Math.random() * words.length)]



    displayWord();

    updateWrongLettersEl();


    popup.style.display = 'none';






})

displayWord()


