'use strict';
// ***** Greeting section *****

function greeting() {
  var userNme = prompt('Hi, What is your name?');
  if ((userNme === null)||(userNme === '')) {userNme = 'No Name';}
  // console.log('userNme:' + userNme);
  alert('Greetings ' + userNme + ', Welcome to Kevin\'s About Me page');
  return userNme;
}
var globalUserName = greeting();

// ***** Quiz section *****
alert('Please take this short quiz about Kevin, answer yes or no.');
var correctAnswerCount = 0;
var answerQ = '';

function questionFun(quizNum,myQuestion,correctAnswer,answerReply){
  var grewUp = prompt('Quiz Question ' + quizNum + ':' + myQuestion + '?');
  grewUp = grewUp.toLowerCase();

  if (grewUp === correctAnswer || grewUp === correctAnswer[0]) {
    // console.log('q1: correct');
    correctAnswerCount++;
    answerQ = 'Correct';
  } else {
    // console.log('q1: wrong');
    answerQ = 'Wrong';
  }
  return(answerQ + ', ' + answerReply);
}

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
function questionSix(){
  var myNum = 4;
  var guessNum = null;
  var numberGuess = false;
  for(var i = 0; i < 4; i++) {
    console.log('guess i:',i);
    if (isNaN(guessNum) || guessNum === null) {
      guessNum = parseInt(prompt('Guess what number I am thinking of between 1 and 10. You have ' + (4-i) + ' guesses.'));
      console.log('start or null');
    } else if (guessNum > myNum) {
      guessNum = parseInt(prompt('Too High, guess again, you have ' + (4-i) + ' guesses.'));
      console.log('too high');
    } else if (guessNum < myNum) {
      guessNum = parseInt(prompt('Too Low, guess again, you have ' + (4-i) + ' guesses.'));
      console.log('too low');
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
}
questionSix();

// Question 7
function questionSeven(){
  var favoriteColor = ['red', 'blue', 'purple', 'orange'];
  var guess = '';
  var guessCount7 = 6;
  var b;

  for (var x = 0; x < 6; x++) {
    guess = prompt('Try and guess one of my favorite colors, you have ' + guessCount7 +' guesses.');
    guess = guess.toLowerCase();
    b = 0;
    while (b < favoriteColor.length) {
      if (guess === favoriteColor[b].toString()) {
        alert('Correct! ' + guess.toUpperCase() + ' is one of my favorite colors!');
        correctAnswerCount++;
        guessCount7 = 0;
        x = 6;
        break;
      }
      b++;
    }
    guessCount7--;
  }
  alert('My Favorite colors are: ' + favoriteColor);
}
questionSeven();
// ****** final message section ******
alert('Thanks ' + globalUserName + ' , you answered a total of ' + correctAnswerCount + ' questions correctly!');




