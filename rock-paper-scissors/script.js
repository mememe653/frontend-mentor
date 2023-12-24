let playerSelection = null;
let computerSelection = null;

const score = document.querySelector(".score");

const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const rock = document.querySelector(".rock");

const playAgain = document.querySelector(".new-game button");
const rulesButton = document.querySelector(".rules-button");

const rockPaperScissors = document.querySelector(".rock-paper-scissors");
const results = document.querySelector(".results");
const youPicked = document.querySelector(".you-picked");
const housePicked = document.querySelector(".house-picked");
const selectionPlaceholder = document.querySelector(".selection-placeholder");
const newGame = document.querySelector(".new-game");
const winLoseMessage = document.querySelector(".win-lose-message");
const rules = document.querySelector(".rules");
const closeRules = document.querySelector(".close-rules");

paper.addEventListener("click", makeSelection);
scissors.addEventListener("click", makeSelection);
rock.addEventListener("click", makeSelection);

playAgain.addEventListener("click", replay);
rulesButton.addEventListener("click", toggleShowRules);
closeRules.addEventListener("click", toggleShowRules);

function makeComputerSelection(playerSelection) {
  const possibilities = [paper, scissors, rock].filter((move) => move !== playerSelection);
  return possibilities[Math.floor(Math.random() * 2)];
}

function playerWins(playerSelection, computerSelection) {
  if (playerSelection === paper) {
    if (computerSelection === rock) {
      return true;
    } else {
      return false;
    }
  } else if (playerSelection === scissors) {
    if (computerSelection === paper) {
      return true;
    } else {
      return false;
    }
  } else {
    if (computerSelection === scissors) {
      return true;
    } else {
      return false;
    }
  }
}

function makeSelection() {
  youPicked.prepend(this);
  playerSelection = this;
  computerSelection = makeComputerSelection(playerSelection);
  rockPaperScissors.classList.toggle("hidden");
  results.classList.toggle("hidden");
  setTimeout(function() {
    if (playerWins(playerSelection, computerSelection)) {
      winLoseMessage.textContent = "You win";
      score.textContent++;
    } else {
      winLoseMessage.textContent = "You lose";
      score.textContent--;
    }
    housePicked.prepend(computerSelection);
    selectionPlaceholder.classList.toggle("hidden");
    newGame.classList.toggle("hidden");
    paper.removeEventListener("click", makeSelection);
    scissors.removeEventListener("click", makeSelection);
    rock.removeEventListener("click", makeSelection);
  }, 1000);
}

function replay() {
  rockPaperScissors.append(playerSelection);
  rockPaperScissors.append(computerSelection);
  rockPaperScissors.classList.toggle("hidden");
  results.classList.toggle("hidden");
  selectionPlaceholder.classList.toggle("hidden");
  newGame.classList.toggle("hidden");
  paper.addEventListener("click", makeSelection);
  scissors.addEventListener("click", makeSelection);
  rock.addEventListener("click", makeSelection);
}

function toggleShowRules() {
  rules.classList.toggle("hidden");
  //document.querySelector("main").classList.toggle("hidden");
}
