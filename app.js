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

// ****** Lab 03 *******
// Question 6
var myNum = 4;
var guessNum = null;

var x = 4;
while(x !== 0) {
  console.log('guess x:',x);
  if (isNaN(guessNum) || guessNum === null) {
    guessNum = parseInt(prompt('Guess what number I am thinking of between 1 and 10. You have ' + x + ' guesses.'));
    console.log('start or null');
  } else if (guessNum > myNum && x !== 0) {
    guessNum = parseInt(prompt('Too High, guess again, you have ' + x + ' guesses.'));
    console.log('too high');
  } else if (guessNum < myNum && x !== 0) {
    guessNum = parseInt(prompt('Too Low, guess again, you have ' + x + ' guesses.'));
    console.log('too low');
  } else if (guessNum === myNum && x !== 0) {
    x = 1;
    alert('Correct! My number was ' + myNum + '!');
    correctAnswerCount++;
    console.log('correct');
  }
  x--;
  if (x === 0) {
    alert('Sorry! My number was ' + myNum + '!');
    console.log('no more guesses');
  }
}
var favoriteColor = ['red', 'blue', 'purple', 'orange'];
var guess = '';
var b = 0;

for (var i = 0; i <= 6; i++) {
  guess = prompt('Try and guess one of my favorite colors, you have ' + a + ' guesses.');
  guess = guess.toLowerCase;

  while (b < favoriteColor.length) {
    if (guess === favoriteColor[b]) {
      alert('Correct! ' + guess.toUpperCase + ' is one of my favorite colors!');
      correctAnswerCount++;
      b = favoriteColor.length;
      i = 6;
    }
    b++;
  }
}
// ****** final message section ******
alert('Thanks ' + userNme + ' , you answered a total of ' + correctAnswerCount + ' questions correctly!');




