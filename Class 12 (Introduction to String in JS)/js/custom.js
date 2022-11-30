'use strict';

let myName = "Mila";
let message = 'Welcome';

let exEsc = 'Hi, I\'m Mila.'; // This back slash is used as an escape sequence.

let exBackTick = `Another syntax to write string`;
console.log(message, myName, exEsc);
console.log(exBackTick);

/* 
=========================================================================
Using ONLY BACKTICK we can concat other variables/values using the in ${}
=========================================================================
*/

let age = 25;
let school = 'MUB';
let milaInfo = `${myName} is ${age} years old and her school is ${school}. She looks only ${8+8}!`;
let coolMessage = "She is so cool."

// Another way to concat using '+' symbol
console.log("Some information about Mila: " + milaInfo + " " + coolMessage);
