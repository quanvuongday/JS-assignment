/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether 
they should wear a jacket (if the temperature is below 15°C) or not.
 */

let getTemperature; 
getTemperature(Number(prompt('What is the current temperature?')));

if ( getTemperature <= 15) {
    console.log ("You should wear jacket");
}

    /* function getTemperature(temp){
        let promptInput = Number(promt ('give me a number '));
        console.log(typeof promptInput);

if (temp <15){
    console.log("You should wear jacket");
}
else{
    console.log('you are good to go');
}


let example = prompt('What is the current temperature?')'
let number = Number(example);
getTemperature(number);
    */