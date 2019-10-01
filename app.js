'use strict';
// ***** Greeting section *****
var userNme = prompt('Hi, What is your name?');
if ((userNme === null)||(userNme === '')) {userNme = 'No Name';}
// console.log('userNme:' + userNme);
alert('Greetings ' + userNme + ', Welcome to Kevin\'s About Me page');

// ***** Quiz section *****
alert('Please take this short quiz about Kevin, answer yes or no.');
var correctAnswerCount = 0;
var answerQ = '';

// Quiz Question 1
var grewUp = prompt('Quiz Question 1: Did Kevin grow up in New Jersey?');
grewUp = grewUp.toLowerCase();

if (grewUp === 'yes' || grewUp === 'y') {
  // console.log('q1: correct');
  correctAnswerCount++;
  answerQ = 'Correct';
} else {
  // console.log('q1: wrong');
  answerQ = 'Wrong';
}
alert(answerQ + ', I grew up in New Jersey, just outside of Philadelphia PA.');

// Quiz Question 2
var movedTo = prompt('Quiz Question 2: Did Kevin move to Seattle in 2008?');
movedTo = movedTo.toLowerCase();

if (movedTo === 'yes' || movedTo === 'y') {
  // console.log('q2: correct');
  correctAnswerCount++;
  answerQ = 'Correct';
} else {
  // console.log('q2: wrong');
  answerQ = 'Wrong';
}
alert(answerQ + ', I did move to Seattle in 2008.');

// Quiz Question 3
var mySchool = prompt('Quiz Question 3: Did Kevin go to school at Drexel University?');
mySchool = mySchool.toLowerCase();

if (mySchool === 'yes' || mySchool === 'y') {
  // console.log('q3: correct');
  correctAnswerCount++;
  answerQ = 'Correct';
} else {
  // console.log('q3: wrong');
  answerQ = 'Wrong';
}
alert(answerQ + ', I did go to Drexel.');

// Quiz Question 4
var myDegree = prompt('Quiz Question 4: Did Kevin get a degree in Architectural Engineering?');
myDegree = myDegree.toLowerCase();

if (myDegree === 'yes' || myDegree === 'y') {
  // alert('Correct, I have a Bachelors degree in Architectural Engineering.');
  // console.log('q4: correct');
  correctAnswerCount++;
  answerQ = 'Correct';
} else {
  // console.log('q4: wrong');
  answerQ = 'Wrong';
}
alert(answerQ + ', I do have a Bachelors degree in Architectural Engineering.');

// Quiz Question 5
var myGoal = prompt('Quiz Question 5: Does Kevin want to be a Software Developer?');
myGoal = myGoal.toLowerCase();

if (myGoal === 'yes' || myGoal === 'y') {
  // console.log('q5: correct');
  correctAnswerCount++;
  answerQ = 'Correct';
} else {
  // console.log('q5: wrong');
  answerQ = 'Wrong';
}
alert(answerQ + ', I do want to be a software developer.');

// ****** final message section ******
alert('Thanks ' + userNme + ' , you answered ' + correctAnswerCount + ' questions correctly!');
