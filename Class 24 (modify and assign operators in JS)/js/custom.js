'use strict'

let amount = 20;
amount = amount + 10; // modify and assign (l1)
console.log(amount); // 30

// alternative to l1
amount+=10; // equivalent to amount = amount + 10 --> 40
console.log(amount);

let amt1 = 10;
amt1-=5; // amt1 = amt1 - 5; --> 5
console.log(amt1);

let amt2 = 5;
amt2 *= 10; //amt2 = amt2 * 10; --> 50
console.log(amt2);

let amt3 = 10;
amt3 /= 5; //amt3 = amt3 / 5; --> 2
console.log(amt3);

let amt4 = 10;
amt4 %= 4; //amt4 = amt4 % 4; --> 2
console.log(amt4);

amount += 20 + 10; // => amount += 30; => amount = amount + 30; => amount = 40 + 30; => amount = 70;
console.log(amount);

amount += amount; // amount = amount + amount; => amount = 70 + 70; => amount = 140;
console.log(amount);