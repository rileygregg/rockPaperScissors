/* Rock paper Scissors

Create array with the choices
Prompt for a user to choose an input
Once chosen, let the computer choose a random input
    If the user chooses "Rock" and the computer chooses "Scissors" then print "Win"
        else if the computer chooses "Rock" then print "Tie" 
        else print "Lose" 
    If the user chooses "Paper" and the computer chooses "Rock" then print "Win" 
        else if the computer chooses "Paper" then print "Tie" 
        else print "Lose" 
    If the user chooses "Scissors" and the computer chooses "Paper" then print "Win" 
        else if the computer chooses "Scissors" then print "Tie" 
        else print "Lose" 
    If "Win", add one point to user
        else if "Tie" add no points to user or computer
        else add point to computer 
Create a function which declares "Win" to equal one point
    else equals no points
Declare a variable to tally the points. 
Once User or Computer makes it to 5 points, prompt a window to declare the winner*/

const handArray = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0
let computerScore = 0

// Randomly generate an input by computer
const computerPlay= () => {    
    return handArray [Math.floor(Math.random() * handArray.length)].toLowerCase();    
};

// TEST to make sure computer randomizes correctly
// console.log(computerPlay());

// prompt the user to choose input
const playersChoice = prompt("Will you choose Rock, Paper or Scissors?");
const playerSelection = () => playersChoice.toLowerCase();

// TEST to make sure the entry comes in as lower case
// console.log(playerSelection());


// Below plays one round with users input and random computer selection
function playRound (user, computer) {
    if (user === 'rock') {
        if (computer === user) {
            return "You tied the round"
        } else if (computer === 'scissors') {
            return "You won the round!"
        } else {
            return "You lost the round!"
        }
    } else if (user === 'paper') {
        if (computer === user) {
            return "You tied the round"
        } else if (computer === 'rock') {
            return "You won the round!"
        } else {
            return "You lost the round!"
        }
    } else if (user === 'scissors') {
        if (computer === user) {
            return "You tied the round"
        } else if (computer === 'paper') {
            return "You won the round!"
        } else {
            return "You lost the round!"
        } 
    } else {
        return "Wrong input, choose either rock, paper or scissors"
        }
    };


// TEST to see if one round plays successfully
    console.log(playRound(playerSelection(), computerPlay()));

// function below is to keep score
function game() {
    playRound(playerSelection(), computerPlay());

    for (let i=0; i < 5; i++) {
        playerScore = i;
        computerScore = i;
        if (playerScore > 0 && playerScore > computerScore) {
            return "You got one on the computer!"
            } else if (playerScore > 1 && playerScore > computerScore) {
            return "You are winning, you got another point!"
            } else if (computerScore > 0 && playerScore < computerScore) {
            console.log("You have no points yet")
            } else if (computerScore > 1 && playerScore < computerScore) {
                console.log("You are losing to the computer")
            }
    
    }
};

function endOfGame() {
    if (playerScore === 5) {
        return "You won the game"
    } else if (computerScore === 5) {
        return "You lost the game"
    }
};




// game();
// endOfGame();
// // console.log(playerScore);
// // console.log(computerScore);