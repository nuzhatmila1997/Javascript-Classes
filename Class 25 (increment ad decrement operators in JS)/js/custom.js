'use strict';

let num = 5;
num++; // equiv to num = num+1 or num+=1
console.log(num); // 6

num--; // equiv to num = num-1 or num-=1
console.log(num); // 5

++num;
console.log(num); // 6

let x=num++;
console.log(x); // value wouldn't change until next num is found. output --> 6. 
x = num;
console.log(x); // now value will be 7. because 2nd num variable is found

let y = ++num;
console.log(y); // prefix inc will return the new value. 8

let z = num--;
console.log(z); // 8 [no change]

z = num;
console.log(z); // 7 [got second num]

z = --num;
console.log(z); // 6

z = num++;
console.log(z); // 6

z = --num; // 6 + 1 = 7 => 7-1 = 6
console.log(z); // 6

z = --num; // 6 - 1 = 5 
console.log(z); // 5

z = num--; //  5 
console.log(z); // 5

z = --num; //  5-1 = 4; => 4-1 = 3 
console.log(z); // 3

console.log("inc/ dec in action");
console.log(num++); //3
console.log(num); //4
console.log(num--); //4
console.log(num); //3
console.log(--num); //2
console.log(num--); //2
console.log(--num); //0 
console.log(++num);//1
console.log(++num);//2

let result = 2 + ++num; // ++ has higher prec than +. so first increment will happen, then addition
alert("result: "+result); // 5

result = 2 + num++;
alert("result: "+result); // 5

result = 2 + num++;
alert("result: "+result); // 6

result = 2 + num;
alert("result: "+result); // 7