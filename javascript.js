const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

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
        console.log("It's a tie!");
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You won, ${playerChoice} beats ${computerChoice}!`);
    } else {
        console.log(`You lost, ${computerChoice} beats ${playerChoice}.`);
    }
}

function verifyAnswer(answer) {
    return (answer === "rock" || answer === "paper" || answer === "scissors");
}

function game() {
    for (let i = 0; i < 5; i++) {
        let keepGoing = true;
        let answer = "";
        while(keepGoing) {
            answer = prompt("What is your choice? (Rock, Paper, Scissors)").trim().toLowerCase();
            if (verifyAnswer(answer)) {
                keepGoing = false;
            } else {
                alert("Please, write one of the valid options");
            }
        }
        console.log(playRound(answer, getComputerChoice()))
    }
}