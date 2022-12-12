'use strict';

/*
-------------------------------------------------------------------------------
** 'if' converts it's condition to boolean.
** any non-empty value is converted to boolean true, so condition becomes true.
** any empty value is converted to boolean false, so condition becomes false.
-------------------------------------------------------------------------------
*/

if (0) { // null, "", undefined, NaN
    console.log("value is 0"); // this will not execute as the condition is false.
}

if (1) {
    console.log("value is 1"); // this will execute as the condition is true.
}

if ("0") {
    console.log("value is '0'"); // this will execute as the condition is true.
}

if ( 3 + 5 ) { // JS will execute the addition operation. if (Boolean(8)) --> if (true)
    console.log("value is 3 + 5"); // this will execute as the condition is true.
}

let a;
if ( a = "Mila" ) { // if is getting 'hello' as condition which is converted to true
    console.log(`Hi ${a}!`);
}

if ( a = null ) { // if is getting null as condition which is converted to false
    console.log(`Hi ${a}!`); // this line will not execute
}

console.log('Testing with user input:');

let myName = prompt("Enter your name:");
if ( myName == 'Fariha' ) {
    console.log(`Hi ${myName}!`);
}

let myAmount = prompt("Enter amount: ");
if ( myAmount >= 100 ) {
    console.log('Welcome');
}