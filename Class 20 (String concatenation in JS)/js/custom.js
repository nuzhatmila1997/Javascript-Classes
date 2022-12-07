'use strict'

let myName = "Fariha " + "Nuzhat"; //Fariha Nuzhat
console.log(myName);

myName = "Hello" + " "+ "Fariha" + " " + "Nuzhat"; //Hello Fariha Nuzhat
console.log(myName);

let fname = "Fariha";
let surname = "Majumdar";
let fullname = fname + " " + surname;
console.log(fullname);

/* 
=================================
Concatination with diff data type
=================================
 */

let result = 4 +"2"; 
console.log(result, typeof result); //JS will not consider addition. it will be concatinated. --> 42 ['+' is concatination op for string]

result = "2" + 4; 
console.log(result, typeof result); //JS will not consider addition. it will be concatinated. --> 24

result = 5 + 7 + 2 + "2"; //first addition will happen, then 14 will be concatinated with 2 --> 142
console.log(result, typeof result);

result = 10 - "2"; //other than + operator, any other arithmetic operators will work fine even if the type is not number. JS will auto cast that string to number
console.log(result, typeof result); 

result = "2" * 10; //other than + operator, any other arithmetic operators will work fine even if the type is not number. JS will auto cast that string to number
console.log(result, typeof result);

result = "100" / 10; //other than + operator, any other arithmetic operators will work fine even if the type is not number. JS will auto cast that string to number
console.log(result, typeof result);

result = 101 % "10"; //other than + operator, any other arithmetic operators will work fine even if the type is not number. JS will auto cast that string to number
console.log(result, typeof result);

let html = `<div class="one">
    <div class="two">
        <h1>${result}</h1>
    </div>
</div>`; //using back tick we can use ${} to concat a variable or other data
console.log(html);

html = '<div class="one">'+
    '<div class="two">'+
    '<h1>'+result+'</h1>'+
    '</div>'+
    '</div>';
console.log(html);

