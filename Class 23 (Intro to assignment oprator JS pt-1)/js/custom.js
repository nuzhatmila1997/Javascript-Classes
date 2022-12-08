'use strict'

// op always reurns a result
let num = 0;
console.log(num = 10+2);

let num1 = 5;
let num2 = 6;
let num3 = 0;
let num4 = 5 + (num3 = num1 + num2); // assignment is valid within an expression. But not recommended.
console.log(num4);

// this way is recommended
num3 = num1 + num2;
num4 = 5 + num3; 
console.log(num4);

// chaining assignment (not recommended)
let x =0, y=0, z=0;
console.log(x, y, z);
x = y = z = 2 + 5;
console.log(x, y, z);