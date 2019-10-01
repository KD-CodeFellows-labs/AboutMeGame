'use strict';

console.log('Im alive');


var likesStrangerThings = prompt('Hello, do you like Stranger Things on Netflix');
likesStrangerThings = likesStrangerThings.toLowerCase();

if (likesStrangerThings === 'yes' || likesStrangerThings === 'y') {
  alert('Yah me too!');
} else {
  alert('Go watch it!');
}


