"use strict";
/*
** within a loop, we can get out of the loop based on a condition.
** whenever js detects a break, it will stop and get out of the loop. 
*/
let counter = 1;

while (counter<=10) {
    console.log("Hello "+counter); // only Hello 1 will be printed
    break;
    counter++;
}
console.log("\n");
let counter1 = 1;

while (counter1<=10) {
    console.log("Hello "+counter1); // Hello 1 to 6 will be printed
    if (counter1 == 6) break;
    counter1++;
}
console.log("\n");
let counter2 = 1;

while (counter2<=10) {
    if (counter2 == 6) break;
    console.log("Hello "+counter2); // Hello 1 to 5 will be printed
    counter2++;
}

console.log("\n");
let counter3 = 1;

while (true) {
    console.log(counter3); // 1 to 7 will be printed
    if (counter3 == 7) break; 
    counter3++;
}
console.log("******************************************");
let uName = '';

while(true) {
    let promptName = prompt("Enter Name:");
    if (!promptName) break;
    uName += promptName + " ";
}
console.log("user names: "+uName);

console.log("******************************************");
let sum = 0;

while(true) {
    let promptNum = +prompt("Enter Number:"); // converting str to num (e.g., "3" to 3) using unary +
    if (!promptNum) break;
    sum += promptNum;
}
console.log("sum of the numbers: "+sum);