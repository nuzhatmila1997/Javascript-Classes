'use strict';

let num1 = Number(prompt("Enter 1st number: "));
let num2 = Number(prompt("Enter 2nd number: "));

console.log("num1 is greater than num2 ", num1>num2);
console.log("num1 is smaller than num2 ", num1<num2);
console.log("num1 is greater than or equals to num2 ", num1>=num2);
console.log("num1 is smaller than or equals to num2 ", num1<=num2);
console.log("num1 equals to num2 ", num1==num2);
console.log("num1 not equals to num2 ", num1!=num2);

console.log("String equals: ","Fariha" == "Fariha"); // true
console.log("String not equals: ","Fariha" != "Nuzhat"); // true
console.log('5'>2); // true (type of 5 is casted to number)
console.log('01'==1); // true ('01' is casted to number 1)
console.log(true == 1); // true (true is casted to number 1)

let fnum = 0;
let snum = "0";
console.log(fnum==snum); // true ["0" is converted to number 0]

console.log(Boolean(fnum)); // false [for all empty val--> 0,'',null,undefined]
console.log(Boolean(snum)); // true [because "0" is a non-empty value]