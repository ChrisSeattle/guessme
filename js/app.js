'use strict';

// Ask for users name
var userName = prompt('Yo, what is your name?');
// Greet the user by name in an alert
alert('Hi, ' + userName + ', good to see you!');
// log that interaction to the console
console.log('userName is ' + userName);

// ask the first guessing game question
var answer1 = prompt('Do you think I have any siblings?').toLowerCase();
// user guesses "yes/no" or "Y/N" without concern of upper or lower case
// tell user if they are wrong or right
if (answer1 === 'yes' || answer1 === 'y') {
    // right answer
    alert('You know it!');
    console.log('user correctly said yes to number 1');
} else {
    // wrong answer
    alert('Soo WRONG!');
    console.log('user said no, that is wrong for number 1');
}

// ask user the second question
var answer2 = prompt('Do I like ice cream?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
    // correct result 
    alert('Correct. Of course I do!');
    console.log('user correctly said yes to number 2');
} else {
    // wrong answer 
    alert('What you think I\'m crazy? Of course I like ice cream');
    console.log('user is clueless and thinks I do not like ice cream');
}

// ask user the third question
var answer3 = prompt('Do I like country music?').toUpperCase();
if (answer3 === 'NO' || answer3 === 'N') {
    // correct answer
    alert('Yea, that is fine if other people like it, but it\'s not for me');
    console.log('user understands I am not a country fan');
} else {
    alert('Uhmm. We have never talked about music taste have we?');
    console.log('user does not know my music taste');
}
// ask user the fourth question

// ask user the fifth question

