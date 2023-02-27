"use strict";

/*
Synatx:
for (initialization; condition checking; stepping) {
    ...
}
for (let count=1; count <= 5; count++) {
    ...
}
** initialization happens only once
** count is in-line variable here.
** no existence outside the loop.
** to make it global, declare it outside the loop
let count;
for (count=1; count <= 5; count++) {
    ...
}
console.log(count) --> 6
*/
for (let count=1; count <= 5; count++) {
    console.log("Hello "+count); // print Hello with count 1 to 5 
}

let count;
for (count=1; count <= 5; count++) {
    console.log("Hi "+count); // print Hello with count 1 to 5 
}

let count1 = 1;
for ( ; count1 <= 5; count1++) { // initialized in the prev line
    console.log("Ohayou "+count1); // print Hello with count 1 to 5 
}

let count2 = 1;
for ( ; count2 <= 5 ; ) { // initialized in the prev line
    console.log("Hola "+count2); // print Hello with count 1 to 5 
    count2++; // incremental step can be written this way too
}

// infinite loop
for ( ; ; ) {
    console.log(count);
}