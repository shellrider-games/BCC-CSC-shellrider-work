const changeBackgroundButton = document.getElementById("changeBackgroundButton");
changeBackgroundButton.addEventListener('mouseover', function() {
    document.body.style.backgroundColor = 'cornflowerblue';
});
changeBackgroundButton.addEventListener('mouseout', function() {
    document.body.style.backgroundColor = 'white';
});

function logHelloMessageToConsole(toWhom){
    console.log(`Hello ${toWhom}`);
}

function logMessageToConsole(message = 'DEFAULT MESSAGE', whisper = false){
    if(whisper) {
        console.log(`%c ${message}`,'font-size:5pt; color: gray');
    } else {
        console.log(message);
    }
}

logHelloMessageToConsole("Georg");
logMessageToConsole("Hello", true);
logMessageToConsole();