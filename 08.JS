const cards = document.querySelectorAll('.card');
const startButton = document.getElementById('startButton')
const result = document.getElementById('result')
const timerElement = document.getElementById('timer')
const resetbutton = document.getElementById('resetButton')

let flippedCards = []
let guessedCards = 0;
let isStarted = false;
let timerInterval;
let seconds = 0;

resetbutton.addEventListener('click', (e) => {
    flippedCards= []
    shuffleCards
})

startButton.addEventListener('click', (e) => {
    isStarted = true;
    startTimer()
})

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        timerElement.textContent = "Time:" + seconds + "seconds"
    }, 1000)

}
function stopTimer() {
    clearInterval(timerInterval);
    result.textContent = "You have finished the game in" + seconds + "seconds"
}



cards.forEach(card => {
    card.addEventListener('click', (e) => {
        if (isStarted == false) {
            return;
        }
        if (flippedCards.length >= 2) {
            return;
        } else {
            card.classList.add('flipped')
            flippedCards.push(card)
        }
        if (flippedCards.length == 2) {
            checkForMatch()
        }
    })
});

function checkForMatch() {
    const [card1, card2] = flippedCards
    const img1 = card1.querySelector('.back-view img').src
    const img2 = card2.querySelector('.back-view img').src

    if (img1 == img2) {
        flippedCards = []
        guessedCards++;
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')
            flippedCards = []
        }, 500)
    }
    if(guessedCards==8){
        console.log("joined");
        
        stopTimer()
    }
}
function shuffleCards() {
    const cardArray = Array.from(cards); 
    for (let i = cardArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cardArray[i], cardArray[j]] = [cardArray[j], cardArray[i]]; 
    }
}