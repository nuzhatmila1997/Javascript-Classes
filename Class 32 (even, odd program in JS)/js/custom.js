'use strict';

let num = prompt('Enter a Number');
num = +num; // converting to number alternative way --> num = Number(num);
console.log(num);
if ( num%2 == 0 ) {
    alert(`${num} is even.`);
} else {
    alert(`${num} is odd.`);
}