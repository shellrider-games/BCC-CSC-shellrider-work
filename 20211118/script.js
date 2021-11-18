const stack = [];
stack.push('red');
stack.push('green');
stack.push('blue');

stack.forEach((value, index, array) => { document.write(`${value} is at the index ${index} in the array: [${array}] <br/>`) });

document.write('<hr>');

const pos = 1;

const removedEl = stack.splice(pos,1);
document.write(`Spliced element at pos: ${pos}`);

document.write(`Removed: ${removedEl}`);
stack.forEach((value, index, array) => { document.write(`${value} is at the index ${index} in the array: ${array} <br/>`) });
document.write('<hr>');

const pets = ['🐱', '🐶', '🐹'];
const wilds = ['🐯', '🐺', '🦒'];
const bugs = ['🦗', '🦋', '🐝'];

const mammals = pets.concat(wilds);
document.write(`Mammals: ${mammals} <br/>`);
const animals = pets.concat(bugs);
document.write(`Animals: ${animals} <br/>`);
document.write('<hr>');

const numbers = [];
for (let i = 0; i < 50; i++){
    numbers.push(Math.floor(Math.random()*9 + 1));
}
document.write(`Numbers: [${numbers}]<br/>`);

document.write(`Filtered numbers greater than 4: [${numbers.filter(function(item) {
    return item > 4;
})}`);
document.write(']<br/>');
document.write('<hr>');
//Objects

const hero = {
    name: 'Bruce Wayne',
    'special name': 'Batsy',
    alias: 'Batman',
    catchphrase: "I'm BATMAN!",
    age: 50,
    foes: ['Joker', 'The Penguin', 'Mr. Freeze'],
}

document.write(`Alias: ${hero.alias} <br/>`);
document.write(`Special name: ${hero['special name']} <br/>`);