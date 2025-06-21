
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.getElementById("player-score");
const computerScoreSpan = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
const buttons = document.querySelectorAll(".btn");

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `You win! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

function showResults(userOption) {
  const result = getRoundResults(userOption);
  roundResultsMsg.innerText = result;
  roundResultsMsg.classList.remove("animate-pulse");
  setTimeout(() => roundResultsMsg.classList.add("animate-pulse"), 50);
  playerScoreSpan.innerText = playerScore;
  computerScoreSpan.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player' : 'Computer"
    }` wins the game!`;
    winnerMsgElement.classList.remove("text-green-600");
    winnerMsgElement.classList.add(playerScore === 3 ? "text-blue-600" : "text-red-600");
    resetGameBtn.classList.remove("hidden");
    optionsContainer.style.display = "none";
    buttons.forEach((btn => btn.disabled = true));
  }


  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.innerText = score0;
    computerScoreSpan.innerText = computerScore0;
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
    resetGameBtn.classList.add("hidden");
    optionsContainer.style.display = "block";
    buttons.forEach(btn => btn.disabled = false);
  }

  resetGameBtn.addEventListener("click", resetGame);

  document.getElementById("rock-btn").addEventListener("click", () => showResults("Rock"));
  document.getElementById("paper-btn").addEventListener("click", () => showResults("Paper"));
  document.getElementById("scissors-btn").addEventListener("click", () => showResults("Scissors"));
