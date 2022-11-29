'use strict'

//declaration and definition on separate lines
let firstName;
firstName = "Fariha";

//declaration and definition in the same line (preferred)
let lastName = "Majumdar";

//multiple var declarion and definition in the same line
let fname = "Fariha", lname = "Majumdar", nickname = "Mila";

console.log(fname, lname, nickname);
alert(fname);

fname = "Samiha";

alert(fname);
middlename = "Nuzhat"; // this type of definition is invalid. It will not execute. Because we have used strict mode here
alert(middlename);
console.log(fname, lname, nickname);