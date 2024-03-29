function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "rock";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        playerScore++;
        return `You won, ${playerChoice} beats ${computerChoice}!`;
    } else {
        computerScore++;
        return `You lost, ${computerChoice} beats ${playerChoice}.`;
    }
}

function checkForVictory() {
    if (playerScore === 5) {
        result.textContent = "You Won the Game!"
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = "You Lost the Game."
        playerScore = 0;
        computerScore = 0;
    }
}

let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.querySelector("#playerScore");
playerScoreDisplay.textContent = `You: ${playerScore}`;
const computerScoreDisplay = document.querySelector("#computerScore");
computerScoreDisplay.textContent = `Computer: ${computerScore}`;
const result = document.querySelector("#result");
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    result.textContent = playRound("rock", getComputerChoice());
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    checkForVictory();
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    result.textContent = playRound("paper", getComputerChoice());
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    checkForVictory();
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    result.textContent = playRound("scissors", getComputerChoice());
    playerScoreDisplay.textContent = `You: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    checkForVictory();
});
