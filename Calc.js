let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEl = document.getElementById("sum-el");

function add () {
    let result = num1 + num2;
    sumEl.textContent = "Sum: " + result;    
}

function subtract () {
    let result = num1 - num2;
    sumEl.textContent = "Sum: " + result;
}

function multiply () {
    let result = num1 * num2;
    sumEl.textContent = "Sum: " + result;
}

function divide () {
    let result = num1 / num2;
    sumEl.textContent = "Sum: " + result;
}


//let firstCard = 0;
//let secondCard = 0;
// let player = {  //for creating object
//     name: "Emperor",
//     chips: 200
// }

// let cards = []
// let sum = 0;
// let isAlive = false;
// let hasBlackJack = false;
    
// let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
// //let sumEl = document.querySelector("#sum-el"); for when id is used
// //let sumEl = document.querySelector(".sum-el"); for class
// let cardsEl = document.getElementById("cards-el");

// let playerEl = document.getElementById("player-el");
// playerEl.textContent = player.name + ": $" + player.chips;

// function getRandomCard() {
//     let randomNumber = Math.floor(Math.random() * 13) + 1;
//     if (randomNumber > 10) {
//         return 10;
//      } else if (randomNumber === 1) {
//             return 11;
//         } else {
//             return randomNumber;
//     }
//     console.log(getRandomCard());        
// }

// function startGame() {
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard;
    
//     renderGame();
// }

// function renderGame() {
//     cardsEl.textContent = "Cards: ";
//     for (let i = 0; i < cards.length; i++) {
//         cardsEl.textContent += cards[i] + " ";
//     }
//     sumEl.textContent = "Sum: " + sum;
//     if (sum <= 20) {
//         message = "Do you want to draw a new card?";
//     } else if (sum === 21) {
//         message = "You've got Blackjack!";
//         hasBlackJack = true;
//     } else {
//         message = "You're out of the game!";
//         isAlive = false;
//     }
//     messageEl.textContent = message;
// } 
// renderGame();

// function newCard() {
//     if (isAlive === false && hasBlackJack === false) {
//         console.log(newCard);
//         let card = getRandomCard();
//         sum += card;
//         cards.push(card);
//         console.log(cards);
//         renderGame();
//     }
// }

/*let count = 0;
let counterEl = document.getElementById("counter");
let elIncrement = document.getElementById("increment");
let elDecrement = document.getElementById("decrement");

//function counter() {
    //count += 1;
    //counterEl.innerHTML = count;


function increment() {
    count ++;
    counterEl.innerHTML = count;
}

function decrement() {
    count--;
    counterEl.innerHTML = count;
}
/*<h2 id="count-el">0</h2>
    <button id="increment-btn" onclick="increment()">INCREMENT</button>
    <button id="save-btn" onclick="save()">SAVE</button>
    <p id="save-el"></p>Previous entries: </p>*/  

