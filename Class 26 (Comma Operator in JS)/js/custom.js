'use strict';

let num = (5+2,7+2);
console.log(num); // 9

num = 5+2,7+2;
console.log(num); // 7 [wrong]

let amount1, amount2, amount3;
let amount = (amount1 = 5, amount2 = 7, amount3 = amount1 + amount2);
console.log(amount); // 12