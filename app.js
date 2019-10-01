'use strict';
// ***** Greeting section *****
var userNme = prompt('Hi, What is your name?');
if ((userNme === null)||(userNme === '')) {userNme = 'No Name';}
console.log('userNme:' + userNme);
alert('Greetings ' + userNme + ', Welcome to Kevin\'s About Me page');

// ***** Quiz section *****
alert('Please take this short quiz about Kevin, answer yes or no.');
var correctAnswerCount = 0;

// Quiz Question 1
var grewUp = prompt('Quiz Question 1: Did Kevin grow up in New Jersey?');
grewUp = grewUp.toLowerCase();

if (grewUp === 'yes' || grewUp === 'y') {
  // alert('Correct, I grew up in New Jersey, just outside of Philadelphia PA.');
  console.log('q1: correct');
  correctAnswerCount++;
} else {
  console.log('q1: wrong');
}

// Quiz Question 2
var movedTo = prompt('Quiz Question 2: Did Kevin move to Seattle in 2008?');
movedTo = movedTo.toLowerCase();

if (movedTo === 'yes' || movedTo === 'y') {
  // alert('Correct, I moved to Seattle 12 years ago.');
  console.log('q2: correct');
  correctAnswerCount++;
} else {
  console.log('q2: wrong');
}

// Quiz Question 3
var mySchool = prompt('Quiz Question 3: Did Kevin go to school at Drexel University?');
mySchool = mySchool.toLowerCase();

if (mySchool === 'yes' || mySchool === 'y') {
  // alert('Correct, I went to Drexel.');
  console.log('q3: correct');
  correctAnswerCount++;
} else {
  console.log('q3: wrong');
}

// Quiz Question 4
var myDegree = prompt('Quiz Question 4: Did Kevin get a degree in Architectural Engineering?');
myDegree = myDegree.toLowerCase();

if (myDegree === 'yes' || myDegree === 'y') {
  // alert('Correct, I have a Bachelors degree in Architectural Engineering.');
  console.log('q4: correct');
  correctAnswerCount++;
} else {
  console.log('q4: wrong');
}

// Quiz Question 5
var myDegree = prompt('Quiz Question 5: Does Kevin want to be a Software Developer?');
myDegree = myDegree.toLowerCase();

if (myDegree === 'yes' || myDegree === 'y') {
  // alert('Correct, I do want to be a software developer.');
  console.log('q5: correct');
  correctAnswerCount++;
} else {
  console.log('q5: wrong');
}

alert('Thanks ' + userNme + ' , you answered ' + correctAnswerCount + ' questions correctly!');
