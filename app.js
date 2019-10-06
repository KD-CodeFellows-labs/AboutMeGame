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

function questionFun(quizNum,myQuestion,correctAnswer,answerReply){
  var grewUp = prompt('Quiz Question ' + quizNum + ':' + myQuestion + '?');
  grewUp = grewUp.toLowerCase();
  var answerQ = '';
  if (grewUp === correctAnswer || grewUp === correctAnswer[0]) {
    correctAnswerCount++;
    answerQ = 'Correct';
    // console.log(quizNum + ':' + answerQ);
  } else {
    answerQ = 'Wrong';
    // console.log(quizNum + ':' + answerQ);
  }
  return(answerQ + ', ' + answerReply);
}

// Quiz Question 1
alert(questionFun('1','Did Kevin grow up in New Jersey','yes','I grew up in New Jersey, just outside of Philadelphia PA.'));

// Quiz Question 2
alert(questionFun('2','Did Kevin move to Seattle in 2008','yes','I did move to Seattle in 2008.'));

// Quiz Question 3
alert(questionFun('3','Did Kevin go to school at Drexel University','yes','I did go to Drexel.'));

// Quiz Question 4
alert(questionFun('4','Did Kevin get a degree in Architectural Engineering','yes','I do have a Bachelors degree in Architectural Engineering'));

// Quiz Question 5
alert(questionFun('5','Does Kevin want to be a Software Developer','yes','I do want to be a software developer'));

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
  var b;
  for (var x = 0; x < 6; x++) {
    guess = prompt('Try and guess one of my favorite colors, you have ' + (6-x) +' guesses.');
    guess = guess.toLowerCase();
    b = 0;
    while (b < favoriteColor.length) {
      if (guess === favoriteColor[b].toString()) {
        alert('Correct! ' + guess.toUpperCase() + ' is one of my favorite colors!');
        correctAnswerCount++;
        x = 6;
        break;
      }
      b++;
    }
  }
  alert('My Favorite colors are: ' + favoriteColor);
}
questionSeven();

// ****** final message section ******
alert('Thanks ' + globalUserName + ' , you answered a total of ' + correctAnswerCount + ' questions correctly!');
