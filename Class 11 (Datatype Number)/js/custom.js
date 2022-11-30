'use strict'

let price = 250; // integer type number
console.log(price);

price = 150.75; // float type number
let width = 30.25;
console.log(price, width);

price="price is 250"; // string datatype 
console.log(price);

let divByZero = 25 / 0;
alert(divByZero); // pop-up will show infinity

let userData = "hello";
let exNaN = userData / 2;
alert(exNaN); // pop-up will show NaN

userData = 500;
exNaN = userData / 2;
alert(exNaN);

let exBigInt = 252343870956784356790134679025679065324765879876456709872359999222n; //BigInt type number
alert(exBigInt); 