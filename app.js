'use strict';
// ***** Greeting section *****

function greeting() {
  var userNme = prompt('Hi, What is your name?');
  if ((userNme === null)||(userNme === '')) {userNme = 'No Name';}
  // console.log('userNme:' + userNme);
  alert('Greetings ' + userNme + ', Welcome to Kevin\'s About Me page');
}
greeting();


// ***** Quiz section *****
alert('Please take this short quiz about Kevin, answer yes or no.');
var correctAnswerCount = 0;
var answerQ = '';

// Quiz Question 1
function questionOne(){
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
}
questionOne ();

// Quiz Question 2
function questionTwo(){
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
}
questionTwo();

// Quiz Question 3
function questionThree(){
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
}
questionThree();

// Quiz Question 4
function questionFour(){
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
}
questionFour();

// Quiz Question 5
function questionFive(){
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
}
questionFive();

// ****** Lab 03 *******
// Question 6
var myNum = 4;
var guessNum = null;
var guessCount;
var numberGuess = false;

guessCount = 4;
for(var i = 0; i < 4; i++) {
  console.log('guess i:',i);
  if (isNaN(guessNum) || guessNum === null) {
    guessNum = parseInt(prompt('Guess what number I am thinking of between 1 and 10. You have ' + guessCount + ' guesses.'));
    console.log('start or null');
    guessCount--;
  } else if (guessNum > myNum) {
    guessNum = parseInt(prompt('Too High, guess again, you have ' + guessCount + ' guesses.'));
    console.log('too high');
    guessCount--;
  } else if (guessNum < myNum) {
    guessNum = parseInt(prompt('Too Low, guess again, you have ' + guessCount + ' guesses.'));
    console.log('too low');
    guessCount--;
  }
  if (guessNum === myNum) {
    alert('Correct! My number was ' + myNum.toString() + '!');
    correctAnswerCount++;
    console.log('correct');
    numberGuess = true;
    break;
  }
}
if (numberGuess !== true) {
  alert('Sorry! My number was ' + myNum + '!');
  console.log('sorry');
}

// Question 7
var favoriteColor = ['red', 'blue', 'purple', 'orange'];
var guess = '';
guessCount = 6;
var b;

for (var x = 0; x < 6; x++) {
  guess = prompt('Try and guess one of my favorite colors, you have ' + guessCount +' guesses.');
  guess = guess.toLowerCase();
  b = 0;
  while (b < favoriteColor.length) {
    if (guess === favoriteColor[b].toString()) {
      alert('Correct! ' + guess.toUpperCase() + ' is one of my favorite colors!');
      correctAnswerCount++;
      guessCount = 0;
      x = 6;
      break;
    }
    b++;
  }
  guessCount--;
}

var c = 1;
var favoriteString = favoriteColor[0];
while (c < favoriteColor.length) {
  favoriteString = favoriteString + ', ' + favoriteColor[c];
  c++;
}
alert('My Favorite colors are: ' + favoriteString);

// ****** final message section ******
alert('Thanks ' + userNme + ' , you answered a total of ' + correctAnswerCount + ' questions correctly!');




