/**
Refine the getLastCharacter function so that it returns the last character from the name parameter it receives.
 */

function getLastCharacter(name) {}

// Sample usage - do not modify
console.log(getLastCharacter('Sam')); // "m"
console.log(getLastCharacter('Alex')); // "x"
console.log(getLastCharacter('Charley')); // "y"

let name = 'Sam';
console.log(name.slice(-1));

let fn = 'Alex'.slice(-1);
console.log(fn);

let str = 'Charley';
let lastLetter = str[str.length- 1];
console.log(lastLetter);

