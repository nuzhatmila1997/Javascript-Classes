"use strict";
/*
=========================================================================================================================================
** Syntax: ??
** To check if a variable is not undefined and not null
** If true, returns the value of the variable else returns whatever is written AFTER ??
** e.g.,
    let myname;
    let test;
    test = myname ?? "No name"; // if and ternary (?) equivalent. test = ((myname!==undefined) && (myname!==null)) ? myname : "No name";
    let yourname = "mila";
    test = myname ?? yourname ?? "No name"; // if myname is not set, check if yourname is set. if not return "No name"
========================================================================================================================================
*/
let myname = null; // or if undefined, test = "No name"
let test;

test = myname ?? "No name";
console.log(test);

let yourname = "mila";
test = myname ?? yourname ?? "No name"; // if-else equivalent. if ((myname!=undefined) && (myname!=null)) test = myname; else if ((yourname!=undefined) && (yourname!=null)) test = yourname; else test = "No name";
console.log(test) // mila

/*
***********************************************************************************************************
!!!!! IMPORTANT !!!!!
--> ?? and || has a major difference.
--> ?? searches for variable is set or not. That means, let x = 0; here x is considered set for ?? operator.
--> || searches for true value. let x=0; this x is NOT considered set for || operator.
************************************************************************************************************
*/

let x = 0;
let test1;
let y = "anything"

test1 = x ?? y ?? "Nothing";
console.log(test1); // 0 [x is set]

test1 = x || y || "hello";
console.log(test1); // anything [x=0 is converted to boolean which is false.]

// ?? Precedence is LESS than arithmetic operators
let mynum1 = 10;
let mynum2 = 20;

let test2;

test2 = mynum1 ?? 5 * mynum2 ?? 6; 
console.log(test2); // 10 [5 * mynum2 will be calculated first. 10 ?? 100 ?? 6 => 10]

test2 = (mynum1 ?? 5) * (mynum2 ?? 6);
console.log(test2); // 200


