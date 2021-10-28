let barValue = 0;
let interval;
const bar = document.getElementById("myBar");

function fillUpBar() {
    interval = setInterval(() => {
        barValue < 100 ? bar.style.width = `${++barValue}%` : clearInterval(interval);
    }, 50);
}

function resetBar() {
    clearInterval(interval);
    barValue = 0;
    bar.style.width = `${barValue}%`;
}

const btn = document.getElementById("fillButton");
btn.addEventListener("click", fillUpBar);
const resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", resetBar);
const pauseBtn = document.getElementById("pauseButton");
pauseBtn.addEventListener("click", () => {clearInterval(interval)});