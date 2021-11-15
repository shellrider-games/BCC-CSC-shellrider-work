const snapSound = new Audio("./res/audio/snap.ogg");
const applauseSound = new Audio("./res/audio/applause.mp3");
const failSound = new Audio("./res/audio/fail.mp3");
const tieSound = new Audio("./res/audio/tie.ogg");

const hideRulesButton = document.querySelector("#hideRules");
hideRulesButton.addEventListener("click", () => {
  snapSound.play();
  const rules = document.querySelector("#rules");
  rules.style.opacity = "0";
  setTimeout(() => {
    rules.style.display = "none";
  }, 250);
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

const optionToString = ["rock", "paper", "scissors", "Spock", "lizard"];

let cpuScore = 0;
let playerScore = 0;
let ignoreInput = false;

const renderScore = function () {
  const playerScoreLabel = document.querySelector("#playerScore");
  const cpuScoreLabel = document.querySelector("#cpuScore");

  playerScoreLabel.innerHTML = playerScore;
  cpuScoreLabel.innerHTML = cpuScore;
};

const tie = function () {
  tieSound.play();
  outPutTextLabel.innerHTML = "TIE";
};

const playerWin = function () {
  applauseSound.play();
  playerScore++;
  outPutTextLabel.innerHTML = "YOU WON!";
  renderScore();
};

const cpuWin = function () {
  failSound.play();
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

const resetSounds = function () {
  applauseSound.pause();
  applauseSound.currentTime = 0;
  failSound.pause();
  failSound.currentTime = 0;
  tieSound.pause();
  tieSound.currentTime = 0;
};

const playRound = function (value) {
  if (ignoreInput) {
    return;
  }
  resetSounds();
  snapSound.play();
  ignoreInput = true;
  playerPick.innerHTML = `<img src="./res/images/${optionToString[value]}.png">`;

  for (let option in optionMap) {
    const optionButton = document.querySelector(`#${option}`);
    optionButton.style.opacity = "0";
  }
  outPutTextLabel.style.opacity = "0";
  function randomNumber() {
    return Math.floor(Math.random() * 3);
  }

  let lastNum = -1;
  let newNum = -1;

  const stopChangePic = setInterval(function () {
    lastNum = newNum;
    while (newNum === lastNum) {
      newNum = randomNumber();
    }
    cpuLastPick.innerHTML = `<img src="./res/images/${optionToString[newNum]}.png">`;
  }, 50);
  setTimeout(function () {
    clearInterval(stopChangePic);
  }, 1000);

  setTimeout(() => {
    const cpuPick = Math.floor(Math.random() * 5);

    cpuLastPick.innerHTML = `<img src="./res/images/${optionToString[cpuPick]}.png">`;
    evaluateWinner(value, cpuPick);
    outPutTextLabel.style.opacity = "1";
    setTimeout(() => {
      for (let option in optionMap) {
        const optionButton = document.querySelector(`#${option}`);
        optionButton.style.opacity = "1";
      }
      ignoreInput = false;
    }, 1250);
  }, 1000);
};

for (let option in optionMap) {
  const optionButton = document.querySelector(`#${option}`);
  optionButton.addEventListener("click", () => {
    playRound(optionMap[option]);
  });
}

renderScore();
