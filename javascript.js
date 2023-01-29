/*
1 - Create a function wich selects randomly and returns one of these three values: "rock", "paper" and "scissors".
2 - Create a function that takes both the player's choice and the computer's and returns the result.
3 - Create a function that prompts the user for their choice (case insensitive), verifies if their answer is one of the three expected values("rock", "paper", "scissors"), calls the previous function five times, each time having asking the user for a different, verified answer, and prints in the console the result of the match.
  3.1 - To verify the answer, create a function that compares the answer to the expected values and returns a boolean of the result.
  3.2 - 3.1's function will be inside a while loop that stops when 3.1.'s function returns true, otherwise alerts the user to use a valid option.
*/
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

function turn(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!"
    } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return `You won, ${playerChoice} beats ${computerChoice}!`;
    } else {
        return `You lost, ${computerChoice} beats ${playerChoice}.`
    }
}