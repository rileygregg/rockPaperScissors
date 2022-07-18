
// DOM Attributes
let playerScore = document.querySelector(".user-score-amount");
let computerScore = document.querySelector(".com-score-amount");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const promptSelectionUser = document.querySelector("user-prompt");
const promptSelectionCom = document.querySelector("com-prompt");

const handArray = ['rock', 'paper', 'scissors'];

// Computers selection decided with random generator below
const computerPlay= function() {    
    return handArray [Math.floor(Math.random() * handArray.length)];    
};

// console.log(computerPlay());

// When choice selected by user, choice is to display on screen
const rockSelect = rock.addEventListener('click', function() {
    document.getElementById("user-prompt").textContent='Rock'
});
const paperSelect = paper.addEventListener('click', function() {
    document.getElementById("user-prompt").textContent='Paper'
});
const scissorSelect = scissors.addEventListener('click', function() {
    document.getElementById("user-prompt").textContent='Scissors'
});

// FUNCTIONS
// function below to display computers choice on screen
function computerSelection() {
    document.getElementById("com-prompt").textContent= computerPlay()
}

function userWins(user, computer) {
    if (user = rockSelect && computer = 'scissors') {
        playerScore++
    } else if (user = paperSelect && computer = )
}

function comWins() {
    alert("Computer wins a point!")
    computerScore++
}

function tie() {
    alert ("Tie, you both get a point!")
    playerScore++
    computerScore++
}

function userRock (user, computer) {
    computer = computerSelection();

    while (user == rockSelect) {
        if (computer == 'rock') {
            return tie()
        } else if (computer == 'paper') {
            return comWins()
        } else {
            return userWins()
        }
    };
}

function userPaper (user, computer) {
    computer = computerSelection();

    while (user == paperSelect) {
        if (computer == 'paper') {
            return tie()
        } else if (computer == 'scissors') {
            return comWins()
        } else {
            return userWins()
        }
    };
}

function userScissors (user, computer) {
    computer = computerSelection();

    while (user == scissorSelect) {
        if (computer == 'scissors') {
            return tie()
        } else if (computer == 'rock') {
            return comWins()
        } else {
            return userWins()
        }
    };
}

function playRound() {
    if (userRock) {
        return 
    }
}
// console.log(playRound(rockSelect, 'paper'));
    
    
    
//     if (user === newRock && computer === handArray[0]||
//         user === newPaper && computer === handArray[1]||
//         user === newScissor && computer === handArray[2]) {
//             alert("Tie, Point For Both Players")
//             playerScore +=1
//             computerScore +=1;
//     } else if (user === newRock && computer === handArray[1]||
//         user === newPaper && computer === handArray[2]||
//         user === newScissor && computer === handArray[0]) {
//             alert("Point For The Computer")
//             computerScore +=1
//     } else {
//             alert("Point For The User")
//             playerScore +=1
//         };
        
//     };
    
//  playRound();



    