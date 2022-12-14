'use strict';

/*
--------------------------------------------------------------------------------------------------
** Ternary operator: ?
** Alternative to if, else but only to use in storing value
** Syntax: (expression) ? value1 : value2
** If expression is true, value1 will be executed, otherwise value2 will be executed
***** alert/ console.log is not to be used as values of ternary op. This will result as undefined. 
alert/ console.log are print functions. They are not values!*****
--------------------------------------------------------------------------------------------------
*/

let userAccess;
let userName =  prompt('Enter your name');

userAccess = (userName == 'Fariha') ? 'Admin' : 'Moderator';
alert(userAccess);

userAccess = (userName == 'Fariha') ? 'Admin' : (userName == 'Mila') ? 'Contributor' : 'Moderator';
console.log(userAccess);

// userAccess = (userName == 'Fariha') ? alert('Admin') : (userName == 'Mila') ? alert('Contributor') : alert('Moderator');
// alert(userAccess); // undefined [alert is not/ doesn't return a value]