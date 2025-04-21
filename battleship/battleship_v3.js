console.log("Battleship")
// Declaring variables
var randomloc = Math.floor(Math.random () * 5);
var shipLocation = [randomloc, randomloc + 1, randomloc + 2];

let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

// game logic

while (!isSunk) {
    guess = prompt("Ready?, Aim, FIRE! (Enter number from 0 to 6)");

    if (guess === null) {
        alert("Thank you for playing!");
        break;

    } 

    guess = parseInt(guess, 10);

    if (isNaN(guess) || guess < 0 || guess > 6) {
        alert("Please enter a valid number between 0 and 6");
        continue;

    }

    guesses++;

    const hitIndex = shipLocation.indexOf(guess);

    if (hitIndex !== -1) {
        alert("HIT!");
        shipLocation.splice(hitIndex, 1);
        hits++;
        if (shipLocation,length === 0) {
            isSunk = true;
        }
    } else {
        alert("MISS!");
    }

}
    
var accuracy = (guesses > 0 ?(hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took " + guesses + " gueses to sink the battleship!" + "\n" + "Accuracy: " + accuracy + "%";

alert(stats);
