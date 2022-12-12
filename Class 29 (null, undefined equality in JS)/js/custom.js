'use strict';

console.log("null and undefined strict equality check: null === undefined --> ",null === undefined); // false [first the type is hecked. Types of null and undefined are different.]
/*
--------------------------------------------------------------------------------------------------------------------------------------
** comparison operator is converting them to numbers.
** Converting empty values (in this case null) to number returns 0 and undefined to number returns NaN.
** This should return false, but JavaScript shows exception for this case by returning null == undefined --> true
***** 0 == NaN --> false,  0 == null --> false BUT null == undefined --> true *****
***** 0 >= null --> true [null is converted to number 0. 0 is not greater than 0, but it is equals to 0. So the result is true] *****
***** 0 <= null --> true *****
--------------------------------------------------------------------------------------------------------------------------------------
*/
console.log("null == undefined always returns -->",null == undefined); // ******** always returns true ************
console.log("null == null -->",null == null); // true
console.log("undefined == undefined -->",undefined == undefined); // true
console.log("0 == NaN -->",0 == NaN); // false

console.log("0 and null comparison below:"); 
console.log("0 == null: ", 0==null); // false
console.log("0 > null: ", 0>null); // false [null is converted to number 0. 0 is not greater than 0]
console.log("0 >= null: ", 0>=null); // true [null is converted to number 0. 0 is not greater than 0, but it is equals to 0. So the result is true]
console.log("0 <= null: ", 0<=null);

console.log("0 and undefined comparison below:"); 
console.log("0 == undefined: ", 0==undefined); // false [undefined is converted to NaN. Number is compared with Not a Number (NaN)]
console.log("0 > undefined: ", 0>undefined); // false 
console.log("0 >= undefined: ", 0>=undefined); // false 
console.log("0 <= undefined: ", 0<=undefined); // false