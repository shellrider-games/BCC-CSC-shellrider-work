let barValue = 0;
let interval;
const bar = document.getElementById("myBar");

function clearMyInterval() {
    clearInterval(interval);
    interval = null;
}

function fillUpBar() {
    if(!interval) {
        interval = setInterval(() => {
            barValue < 100 ? bar.style.width = `${++barValue}%` : clearMyInterval();
            bar.style.backgroundColor = "red";
            if(barValue >= 30) {bar.style.backgroundColor = "yellow";}
            if(barValue >= 80) {bar.style.backgroundColor = "green";}
        }, 50);
    }
}

function resetBar() {
    clearMyInterval();
    barValue = 0;
    bar.style.width = `${barValue}%`;
}

const btn = document.getElementById("fillButton");
btn.addEventListener("click", fillUpBar);
const resetBtn = document.getElementById("resetButton");
resetBtn.addEventListener("click", resetBar);
const pauseBtn = document.getElementById("pauseButton");
pauseBtn.addEventListener("click", clearMyInterval);