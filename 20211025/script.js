//Modify and assign
let answerToEverything = 42;

console.log(answerToEverything + 8);
console.log(answerToEverything);

answerToEverything += 8; // answerToEverything = answerToEverything + 8

//Increment and Decrement
let counter = 0;
console.log(counter++); // logs 0
console.log(++counter); // logs 2

console.log('========LOGICAL OPERATORS=========');

//AND
let result = 2 > 1 && 3 < 4;
console.log(result);

//OR
result = 2 > 1 || 3 > 4;
console.log(result);

result = !(2 > 1 && 3 < 4);
console.log(result);

console.log('========COMPARISION OPERATORS=========');

console.log(1 == 1);

console.log('1' == 1);
console.log('1' === 1);

console.log(2 != '2');
console.log(2 !== '2');

console.log(2 >= 2);
console.log(3 <= 3);

console.log('========CONDITIONAL STATEMENTS=========');


if(+prompt('What is the answer to life, the universe and everything?') === 42) {
    console.log('You are the best!');
}