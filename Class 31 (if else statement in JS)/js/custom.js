'use strict';

let amt = 50;
if ( amt >= 100 ) {
    console.log("Nice.");
} else {
    console.log('Not nice.');
}

console.log('Month detector:');

let month = prompt('Enter:');
if ( month == 'JAN' ) {
    console.log('January');
} else if ( month == 'FEB' ) {
    console.log('February');
} else if ( month == 'MAR' ) {
    console.log('March');
} else if ( month == 'APR' ) {
    console.log('April');
} else if ( month == 'MAY' ) {
    console.log('May');
} else if ( month == 'JUN' ) {
    console.log('June');
} else if ( month == 'JUL' ) {
    console.log('July');
} else if ( month == 'AUG' ) {
    console.log('August');
} else if ( month == 'SEP' ) {
    console.log('September');
} else if ( month == 'OCT' ) {
    console.log('October');
} else if ( month == 'NOV' ) {
    console.log('November');
} else if ( month == 'DEC' ) {
    console.log('December');
} else {
    console.log('INVALID MONTH NAME.');
}

console.log('Comparison with 100:');

let num = prompt('Enter a number:');
if ( num > 0 ) {
    console.log('Greater than 100.');
} else if ( num < 0 ) {
    console.log('Smaller than 100.');
} else {
    console.log('Equal to 100.');
}

console.log('Simple Grading');

let num1 = prompt('Enter a number:');
if ( num1 > 80 ) {
    console.log('A+');
} else if ( num1 < 40 ) {
    console.log('F');
} else {
    console.log('something');
}