'use strict'

let x = "2";
console.log(typeof x); // string

x = +x;
console.log(typeof x); // number

let bool = false;
console.log(+bool);

console.log(+"", +null); // 0, 0

let str = "5" + "5";
console.log(str, +str, typeof +str);

let strToNum = Number("5") + Number("5"); // 10
console.log("using Number():", strToNum, typeof strToNum); 

strToNum = +"5" + +"5"; // 10
console.log("using unary plus:", strToNum, typeof strToNum);

let num = +true;
console.log(num, typeof num); // 1 number