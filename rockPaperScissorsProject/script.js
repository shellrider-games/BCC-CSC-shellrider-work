const hideRulesButton = document.querySelector("#hideRules");
hideRulesButton.addEventListener("click", () => {
  const rules = document.querySelector("#rules");
  rules.style.display = "none";
});

const outPutTextLabel = document.querySelector("#text-output");
const playerLastPick = document.querySelector("#playerPick");
const cpuLastPick = document.querySelector("#cpuPick");

const optionMap = {
  rock: 0,
  paper: 1,
  scissors: 2,
  spock: 3,
  lizard: 4,
};

optionToString = ["rock", "paper", "scissors", "Spock", "lizard"];

let cpuScore = 0;
let playerScore = 0;

const renderScore = function () {
  const playerScoreLabel = document.querySelector("#playerScore");
  const cpuScoreLabel = document.querySelector("#cpuScore");

  playerScoreLabel.innerHTML = playerScore;
  cpuScoreLabel.innerHTML = cpuScore;
};

const tie = function () {
  outPutTextLabel.innerHTML = "TIE";
};

const playerWin = function () {
  playerScore++;
  outPutTextLabel.innerHTML = "YOU WON!";
  renderScore();
};

const cpuWin = function () {
  cpuScore++;
  outPutTextLabel.innerHTML = "YOU LOST!";
  renderScore();
};

/*
 * This black magic works.
 * It is the mathematical representation of the game mechanics.
 */
const evaluateWinner = function (player1, player2) {
  let difference = player1 - player2;
  if (difference < 0) {
    difference += 5;
  }
  if (player1 === player2) {
    tie();
  } else {
    if (difference % 2) {
      playerWin();
    } else {
      cpuWin();
    }
  }
};

const playRound = function (value) {
  const cpuPick = Math.floor(Math.random() * 5);
  playerPick.innerHTML = `<img src="./res/images/${optionToString[value]}.png">`;
  cpuLastPick.innerHTML = `<img src="./res/images/${optionToString[cpuPick]}.png">`;
  evaluateWinner(value, cpuPick);
};

for (let option in optionMap) {
  const optionButton = document.querySelector(`#${option}`);
  optionButton.addEventListener("click", () => {
    playRound(optionMap[option]);
  });
}

renderScore();
