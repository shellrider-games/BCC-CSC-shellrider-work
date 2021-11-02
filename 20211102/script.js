let i = 0
while (i < 10) {
    console.log(`While Loop: ${++i}`);
}

for(let i = 0; i < 10; i++) {
    console.log(`For Loop: ${i}`);
}

const person = {
    "first name": "Peter",
    "family name": "Parker",
    alias: "Spiderman",
    age: 26,
}

for (let key in person){
    console.log(`${key}: ${person[key]}`);
}

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for (let letter of alphabet){
    console.log(letter);
}