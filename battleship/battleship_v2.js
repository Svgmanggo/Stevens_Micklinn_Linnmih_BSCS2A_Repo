console.log("Battleship")
// Declaring variables
var randomloc = Math.floor(Math.random () * 5);

var location1 = randomloc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

// game logic

while (isSunk == false) {
    guess = Number(prompt("Ready? And FIRE! (Enter number from 0 to 6)"));

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")

    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hits!')
            hits++;

            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!")
            }
        } else { 
            alert('Miss!')
        }
    }
}

var accuracy = (guesses > 0 ?(hits / guesses) * 100 : 0).toFixed(2);

var stats = "You took" + guesses + "gueses to sink the battleship!" + "\n" + "and your accuracy is:" + accuracy + "%";


alert(stats);