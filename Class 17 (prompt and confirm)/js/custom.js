'use strict';

let firstName = prompt("Enter your first name: ");

let lastName = prompt("Enter your last name: ", "Ex.John Doe");
console.log(`Hi ${firstName} and ${lastName}`);
console.log(typeof firstName, typeof lastName); // if input is any number, the types will show string. if cancel is clicked, type will return object

let isEmployed = confirm("Are you an Employee?");
console.log(`${firstName} ${lastName} is employed? --> ${isEmployed}`); // onclick ok--> true, onclick cancel--> false
console.log(typeof isEmployed); // boolean