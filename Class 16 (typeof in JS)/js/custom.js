'use strict';

let myName = "Mila";
console.log(typeof(myName)); // console will show string

myName = 300;
console.log(typeof(myName)); // console will show number

let myBigInt = 300n;
console.log(typeof(myBigInt)); // console will show bigint

let float_num = 20.43;
console.log(typeof(float_num)); // console will show number

let bool = true;
console.log(typeof(bool)); // console will show boolean

console.log(typeof(undefined)); // console will show undefined

console.log(typeof(null)); // console will show object. This is a javascript error. null is not an object. It's a premitive datatype.

// Alternate way to use typeof [operator form] and typeof(undefined) is called functional form
console.log(typeof myName);
console.log(typeof "Fariha");