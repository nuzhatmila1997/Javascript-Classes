'use strict';

/*
 --> When we declare a variable but dont assign any value, it is by default set to type undefined.
 --> Sometimes user submit without value. That causes variables to be undefined.
 --> Then validation is done by checking if the value is null/ undefined/ ''. If so, error.
*/

let myName; // set to undefined

// alternate
let fname = undefined;

console.log(myName);
console.log(fname);

let name1 = "Mila";
console.log(name1);

name1 = undefined; 
console.log(name1);