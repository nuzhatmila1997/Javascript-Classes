'use strict';
/*
====================================================================
String() function converts any type of variable/ datatype to String
====================================================================
*/

let price = 100;
console.log(price, typeof price); // price --> 100, typeof price --> number

price = String(price);
console.log(price, typeof price); // price --> "100", typeof price --> string

let test = null;
console.log(test, typeof test); // test --> null, typeof test --> object

test = String(test);
console.log(test, typeof test); //test --> "null", typeof test --> string

test = undefined;
console.log(test, typeof test); // test --> undefined, typeof test --> undefined

test = String(test);
console.log(test, typeof test); //test --> "null", typeof test --> string

test = true;
console.log(test, typeof test); // test --> true, typeof test --> boolean

test = String(test);
console.log(test, typeof test); //test --> "true", typeof test --> string

/*
====================================================================
Number() function converts any type of variable/ datatype to Number
** JS converts string number inputs to numbers automatically.
** But best practice is to cast the types.
====================================================================
*/

let userPrice = "100";
console.log(userPrice, typeof price); // userPrice --> "100", typeof userPrice --> string

userPrice = Number(price);
console.log(userPrice, typeof price); // userPrice --> 100, typeof userPrice --> number

let fprice = "uu";
let sprice = "10";
let div = fprice/sprice;
console.log(`division is: ${div}`) // division is: NaN

fprice = Number("20");
sprice = Number("10");
div = fprice/sprice;
console.log(`division is: ${div}`) // division is: 2

console.log(null, Number(null), typeof Number(null)); // null is converted to 0, type number

console.log('mila', Number('mila'), typeof Number('mila')); // string is converted to NaN, type number

console.log(true, Number(true), typeof Number(true)); // boolean true is converted to 1, boolean false is converted to 0, type number

console.log(undefined, Number(undefined), typeof Number(undefined)); // undefined is converted to NaN, type number

console.log("  195   ", Number("  195   "), typeof Number("  195   ")); // JS removes extra white spaces, type number

console.log("", Number(""), typeof Number("")); //empty string is converted to 0, type number

console.log('  333mila ', Number('  333mila '), typeof Number('  333mila ')); // string is converted to NaN, type number

console.log("   ", Number("   "), typeof Number("   ")); // whitespace removed by JS, empty string is converted to 0, type number

/*
==========================================================================================
Boolean() function converts any type of variable/ datatype to Boolean
** Boolean(x) --> true if x = any non empty value
** Boolean(x) --> false if x = any empty value [null, undefined, NaN, "", 0]
** Unlike other programming language, JS converts Boolean("0") to true [as it is a string]
** JS converts Boolean("  ") to true [as it is a string]
==========================================================================================
*/

console.log(133, Boolean(133), typeof Boolean(133)); // 133 true 'boolean'

console.log(0, Boolean(0), typeof Boolean(0)); // 0 false 'boolean'

console.log(null, Boolean(null), typeof Boolean(null)); // null false 'boolean'

console.log(undefined, Boolean(undefined), typeof Boolean(undefined)); // undefined false 'boolean'

console.log(NaN, Boolean(NaN), typeof Boolean(NaN)); // NaN false 'boolean'

console.log("", Boolean(""), typeof Boolean("")); // (empty string) false 'boolean'

console.log("0", Boolean("0"), typeof Boolean("0")); // 0 true boolean

console.log("  ", Boolean("  "), typeof Boolean("  ")); // (three spaces) true boolean [JS is not removing spaces, so true]

