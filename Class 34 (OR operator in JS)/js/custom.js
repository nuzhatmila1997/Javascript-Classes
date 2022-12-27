'use strict';

/*
-----------------------------------------------------------
** OR operator --> ||
** To check multiple conditions
** Returns boolean value
** If one of the conditions is true, the result is true.
** If all of the conditions are false, the result is false.
   true || true = true
   true || false = true
   false || true = true
   false || false = false
------------------------------------------------------------
*/

let amt1 = 6;
let amt2 = 25;

if ( amt1 > 5 || amt2 < 25) {
    console.log('amount is greater than 5 or less than 25');
}

let uname = "";

if ( uname == "" || uname == null ) {
    console.log('username required.');
}
/*
"2"||"hello"||0 --> 1|1|0 --> true
*/

console.log(false||5); //5
console.log(true||5); //true
console.log(5||true); //5
console.log(0||0||0); //0 [if every value is false, returns the last original value]

let username = prompt("Enter Name:");
console.log(typeof username);

let isBlank = username || 'blank'; //if input is null/empty string this will return 'blank'

if (isBlank=='blank') {
    alert('user name required!');
}
else alert(`hi ${username}`);