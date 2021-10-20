const countNumber = Math.ceil(Math.random()*5) + 5;
const timeout = 1000;

let divConsole = document.getElementById("console");

divConsole.setAttribute("title", "The Console");

function addLineToDivConsole(text) {
    divConsole.innerHTML += `${text}<br>`;
}

addLineToDivConsole("Hello?");
addLineToDivConsole("Are you there?");
addLineToDivConsole(`I'm gonna count down from ${countNumber}`);

function cd(counter = countNumber) {
    if (counter > 0 ) { 
        addLineToDivConsole(counter);
        setTimeout( () => { cd(counter-1) }, timeout);
    }
}
setTimeout(() => { cd(countNumber) }, timeout);