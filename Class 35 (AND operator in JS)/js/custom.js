'use strict';

/*
-----------------------------------------------------------
** AND operator --> &&
** To check multiple conditions
** Returns boolean value
** If one of the conditions is false, the result is false.
** If all of the conditions are true, the result is true.
   true && true = true
   true && false = false
   false && true = false
   false && false = false
** precedence of && is higher than ||
    so if we want || to execute first, we can use paranthesis. 
------------------------------------------------------------
*/

let uname = 'fariha';
let urole = 'moderator';

if ( (uname == 'fariha') && (urole == 'admin') ) {
    console.log(`hi ${uname}`);
} else console.log('invalid credentials');

console.log(2 && 0 && 5); //0 [got false by converting 0 to boolean false. will return original value 0]
console.log(2 && null && 5); //null [got false by converting null to boolean false. will return original value null]
console.log(2 && "" && 5);//""
console.log(2 && undefined && 5);//undefined
console.log(2 && 3&& 5);//5
console.log(null && 0 && 5);//null

console.log(2 && 0 || 3); //3 [=> 0 || 3 => 3]
console.log(2 && (2 || 3)); //2 [=> 2 && 2 => 2]
console.log(2 && (2 || 3 && 5)); //2 [2 && (2 || 5) => 2 && 2 => 2]

let mark = prompt("Enter mark");

if ( (mark >= 80) && (mark <= 100) ) console.log('Grade: A+');
else if ( (mark >= 75) && (mark <= 79) ) console.log('Grade: A');
else if ( (mark >= 70) && (mark <= 74) ) console.log('Grade: A-');
else if ( (mark >= 65) && (mark <= 69) ) console.log('Grade: B+');
else if ( (mark >= 60) && (mark <= 64) ) console.log('Grade: B');
else if ( (mark >= 55) && (mark <= 59) ) console.log('Grade: B-');
else if ( (mark >= 50) && (mark <= 54) ) console.log('Grade: C+');
else if ( (mark >= 45) && (mark <= 49) ) console.log('Grade: C');
else if ( (mark > 40) && (mark <= 44) ) console.log('Grade: C-');
else if ( (mark == 40) ) console.log('Grade: D');
else if ( (mark < 40) && (mark >= 0) ) console.log('Grade: F');
else console.log('invalid');