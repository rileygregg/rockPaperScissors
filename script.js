/* Rock paper Scissors

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

const playerSelectionChoice = prompt ("Rock, Paper or Scissors?");
const handSelection = ["Rock", "Paper", "Scissors"];
const playerSelection = handSelection.toLowerCase;
// Below creates the random input made by the computer
const computerSelection = math.floor (math.random() * handSelection.length);
let playerScore = 0;
let computerScore = 0 ;

// functions below start the choosing process
function computerChoice() {
    let result = computerSelection;
    return computerSelection; 
}

function playerChoice() {
    let result = playerSelection;
    return playerSelection; 
}

// function shows options for each round
function playRound () {
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock" ) {
        return ("You Win!") ;
    } else if (playerSelection === "Rock" && computerSelection === "Rock" || 
               playerSelection === "Scissors" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Paper" ) {
               return ("You Tie!") ;
    } else {
        return ("You Lose!") ;
    }
}

function gamePoints () {
    for (i=0; i > 5; i++) {
        if (playRound === "You Win!") {
            return playerScore = i++ ;
        } else if (playRound === "You Lose!") {
            return computerScore = i++ ;
        } else {
            return ("Tie, No Points Added!")
        }
    }    
}

function finalTally () {
    if (playerScore > computerScore) {
        return ("You Have Won The Game!")
    } else if ( computerScore > playerScore) {
        return ("You Have Lost The Game!")
    } else {
        return ("You Have Tied The Game!")
    }
}

console.log(playRound())
