'use strict';
/*
----------------------------------------------------------------------------------------------------------------------------------
Equality: '==' -> compares without considering data types;
Strict Equality: '===' -> compares considering data types [first data type equality is checked, if true -> then check value];
Inequality: '!=' -> compares without considering data types;
Strict inquality: '!==' -> compares considering data types; [first data type inequality is checked, if true -> then check value];
----------------------------------------------------------------------------------------------------------------------------------
*/

console.log(true == 1); // true
console.log(true === 1); // false [true is of boolean type, 1 is of number type]

console.log(false == 0, false == ''); // true, true
console.log(false === 0, false === ''); // false, false [false is of boolean type, 0 is of number type, '' is of string type]

console.log("123" == 123); // true
console.log("123" === 123); // false ["123" is of string type, 123 is of number type]

console.log("123" != 123); // false
console.log("123" !== 123); // true ["123" is of string type, 123 is of number type]

let number1 = "100";
console.log("Equality check: ",number1 == 100);
console.log("Strict equality check: ",Number("100")===100);