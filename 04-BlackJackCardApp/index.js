// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = "";

messageEl = document.getElementById("message-el");
sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Creating an object
let player = {
    name: "Kiran",
    chips: 157

}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


// this function return a random number between 1 and 13
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    if (randomNumber == 1) {
        return (11);
    }
    else if (randomNumber > 10) {
        return (10);
    }
    else {
        return (randomNumber);
    }

}


function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards.push(firstCard);
    cards.push(secondCard);
    sum = firstCard + secondCard;
    renderGame();
}



function renderGame() {

    if (sum < 21) {
        message = "Do you want to draw a new card ?";
    }
    else if (sum == 21) {
        message = "wohooo... You have got BlackJack !...";
        hasBlackJack = true;
        console.log(hasBlackJack)
    }
    else {
        message = "You are out of the game !...";
        isAlive = false;
        console.log(isAlive);
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum : " + sum;
    cardsEl.textContent = "Cards : ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent = cardsEl.textContent + cards[i] + " ";
    }

}

function newCard() {

    if (isAlive === true && hasBlackJack === false) {
        message = "drawing a new card from deck!";
        messageEl.textContent = message;

        let thirdCard = getRandomCard();
        sum = sum + thirdCard;

        cards.push(thirdCard);
        console.log(cards);

        renderGame();
    }

}


