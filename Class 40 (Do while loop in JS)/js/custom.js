"use strict"

/*
=======================================================================================================
** if the condition is false in the beginning, do-while loop executes at least once.
let counter = 6;

do {
    console.log("hello "+counter);
    counter++;

} while(counter<=5)

O/P: hello 6
=======================================================================================================
*/

let counter = 1;
let counters = 5;

do {
    console.log("hello "+counter);
    counter++;

} while(counter<=5)

do {
    console.log("hi "+counters);
    counters--;

} while(counters>=1)