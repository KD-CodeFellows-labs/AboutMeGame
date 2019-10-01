'use strict';
// Greeting section
var userNme = prompt('Hi, What is your name?');
if ((userNme === null)||(userNme === '')) {userNme = 'No Name';}
console.log(userNme);
alert('Greetings ' + userNme + ', Welcome to Kevin\'s About Me page');

// Quiz section
alert('Please take this short quiz about me, answer yes or no.')
var GrewUp = prompt('Quiz Question 1: Did Kevin grow up in New Jersey?');
GrewUp = GrewUp.toLowerCase();

if (GrewUp === 'yes' || GrewUp === 'y') {
  // alert('Correct, I grew up in New Jersey, just outside of Philadelphia PA.');
  console.log('q1: correct');
} else {
  console.log('q1: wrong');
}



