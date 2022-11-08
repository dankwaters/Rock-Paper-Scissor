// const randomPlayerNumber = Math.floor(Math.random()*3);
// const randomComputerNumber = Math.floor(Math.random()*3);

function getChoice(randomNumber) {
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissor"
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats rock.";
    } else if (computerSelection === "scissor") {
        return "You Win!";
    } else {
        return "Tie";
    }
  }
   if (playerSelection === "paper") {
     if (computerSelection === "scissor") {
       return "You Lose! Scissor beats paper";
     } else if (computerSelection === "rock") {
       return "You Win!";
     } else {
       return "Tie"
     }
   }
  if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats scissor"
    } else if (computerSelection === "paper") {
    return "Your Win!";
    } else {
      return "Tie"
    }
  }
}

// const computerSelection = getChoice(randomComputerNumber);
// const playerSelection = getChoice(randomPlayerNumber);
// console.log(playRound(playerSelection, computerSelection))
// console.log ("Player: " + playerSelection);
// console.log("Computer: " + computerSelection);

function game() {
  for (let i = 1; i <= 5; i++) {
    let randomPlayerNumber = Math.floor(Math.random()*3);
    let randomComputerNumber = Math.floor(Math.random()*3);
    let computerSelection = getChoice(randomComputerNumber);
    let playerSelection = getChoice(randomPlayerNumber);
    console.log(i + ". " + playRound(playerSelection, computerSelection))
    console.log ("Player: " + playerSelection);
    console.log("Computer: " + computerSelection);
  }
}

console.log(game())