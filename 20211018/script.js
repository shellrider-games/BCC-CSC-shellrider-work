/**
/$$$$$$$              /$$                     /$$$$$$$$                                     
| $$__  $$            | $$                    |__  $$__/                                     
| $$  \ $$  /$$$$$$  /$$$$$$    /$$$$$$          | $$ /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
| $$  | $$ |____  $$|_  $$_/   |____  $$         | $$| $$  | $$ /$$__  $$ /$$__  $$ /$$_____/
| $$  | $$  /$$$$$$$  | $$      /$$$$$$$         | $$| $$  | $$| $$  \ $$| $$$$$$$$|  $$$$$$ 
| $$  | $$ /$$__  $$  | $$ /$$ /$$__  $$         | $$| $$  | $$| $$  | $$| $$_____/ \____  $$
| $$$$$$$/|  $$$$$$$  |  $$$$/|  $$$$$$$         | $$|  $$$$$$$| $$$$$$$/|  $$$$$$$ /$$$$$$$/
|_______/  \_______/   \___/   \_______/         |__/ \____  $$| $$____/  \_______/|_______/ 
                                                      /$$  | $$| $$                          
                                                     |  $$$$$$/| $$                          
                                                      \______/ |__/                          
 */

//undefined
let a;
console.log(typeof a);

//null
let b = null;
console.log(typeof b);

//objects
const myObj = {
    userName: 'notSpiderman',
    "first-name": 'Peter',
    "second-name": 'Parker',
    age: 26,
};

console.log(myObj);

const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
console.log(daysOfWeek);
console.log(`Number of days in a week is ${daysOfWeek.length}`);

function sayHello(){
    console.log("Hello");
}

let div = document.getElementById('console');
div.setAttribute('title', 'Hover me!');
div.innerHTML = 'Our first JS to DOM interacton!<br/> Wohoo!'