'use strict'

console.log(3*2+5); //11

console.log(3*(2+5)); //21

console.log(100/10%3); //1

console.log(3+2*5+2); //15

console.log((3+2)*(5+2)); //35

let num1 = "30";
let num2 = "40";
let res = +num1 + +num2; //unary + priority higher, then binary +. First conversion to number type, then addition.
console.log(res);

console.log(50+2-2**3); //44