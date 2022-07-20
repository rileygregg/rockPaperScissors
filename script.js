

let playerScore = 0;
let computerScore = 0;

//dom select all buttons. Use input instead of buttons in html
const buttons = document.querySelectorAll("input");

const handArray = ['Rock', 'Paper', 'Scissors'];

// Computers selection decided with random generator below
function computerSelection() {
    return  handArray[Math.floor(Math.random() * handArray.length)];
}

// function to play game. Place playerSelection as parameter 
function playRound(playerSelection) {
    let comSelection = computerSelection()
    let result = "";
    let finalResult = ""
    
  
    if ((playerSelection == "Rock" && comSelection == 'Scissors') ||
    (playerSelection == "Scissors" && comSelection == 'Paper') ||
    (playerSelection == "Paper" && comSelection == 'Rock')) {

        playerScore+= 1
        result = `You win! ${playerSelection} beats ${comSelection}!
            Player score: ${playerScore}
            Computer score: ${computerScore}`

        if (playerScore == 5) {
            finalResult = "Game Over - You Win"
            disableButtons()
        }

    } else if (playerSelection == comSelection) {
        result = `It's a tie. You both chose ${playerSelection}!
        Player score: ${playerScore}
        Computer score: ${computerScore}`
    
    } else {
        computerScore +=1
        result = `You Lose! ${comSelection} beats ${playerSelection}!
        Player score: ${playerScore}
        Computer score: ${computerScore}`

        if (computerScore == 5) {
            finalResult = "Game Over - Computer Wins"
            disableButtons()
        }
    }

    document.getElementById('result-of-round').textContent = finalResult
    document.getElementById('score-message').textContent = result
    document.getElementById('com-prompt').textContent=comSelection
    
    

    return
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
        document.getElementById("user-prompt").textContent=(button.value)
        
    })
})