"use strict";

/*
==========================================================================
** ! --> Converts true to false and false to true
** Uses only one operand
** !true => false / !false => true
** Greater precedence than and/ or but parantheses has greatest precedence
==========================================================================
 */

let num = 10;
console.log(!num); // false [1st num variable is converted to boolean true. !10 => !true, ! convertes true to false]

let num1 = prompt("Enter number");
num1 = Number(num1);

if (!(num1==10)) { // num!=10
    console.log("not 10");
}

let uname = "Fariha";
let usernamelen = 2;

if (!(usernamelen>=3 && usernamelen<=10)) {
    console.log("invalid username");
} else {
    console.log("valid username")
}
console.log(!!null) //false

let test = !null;
console.log(test); //true [!null => !false => true]

test = !!test;
console.log(test); //true [!!true => !false => true]

//convert anything to boolean
let a = 5;
a = !!a; // equiv Boolean(a)
console.log(a); // true