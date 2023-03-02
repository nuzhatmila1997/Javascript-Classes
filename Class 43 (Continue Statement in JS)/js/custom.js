"use strict";

/* 
** skips iteration at a particular condition
** cannot be uesd with ternary operator (?)
*/

for(let i = 1; i <= 10; i++) {
    if (i == 5) continue; 
    console.log("hello "+i); // print hello 1 to 10 except for hello 5
}

/* 
** continue statement should be carefully used in case of while loop
** it may cause infinite loop if not used properly
e.g., 
let whileCount = 1;
while (whileCount <= 10) {
    if (whileCount == 5) continue;
    console.log("hello "+whileCount);
    whileCount++
}
-- the above code leads to an infinite loop. when whileCount is 5, condition is true, continue statement will
skip the loop and again in the next iteration whileCount will be 5 as the below lines won't be executed causing
it to become an infinite loop!
*/

/* Solution 1:
** initialize counter variable to 0
** while condition: whileCount < 10
** increment counter after while condition
*/

let whileCount = 0;
while (whileCount < 10) {
    whileCount++;
    if (whileCount == 5) continue;
    console.log("whileCount "+whileCount); 
}

/* Solution 2:
** increment counter before continue
*/

let whileCount1 = 1;
while (whileCount1 <= 10) {
    if (whileCount1 == 5) {
        whileCount1++;
        continue;
    }
    console.log("whileCount1 "+whileCount1); 
    whileCount1++;
}