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

// ask user the second question, respond and log
var answer2 = prompt('Do I like ice cream?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
    // correct result 
    alert('Correct. Of course I do!');
    console.log('user correctly said yes to number 2');
} else {
    // wrong answer 
    alert('What you think I\'m crazy? Of course I like ice cream');
    console.log('user is clueless and thinks I do not like ice cream (Q2)');
}

// ask user the third question, respond and log
var answer3 = prompt('Do I like country music?').toUpperCase();
if (answer3 === 'NO' || answer3 === 'N') {
    // correct answer
    alert('Yea, that is fine if other people like it, but it\'s not for me');
    console.log('user understands I am not a country fan (Q3)');
} else {
    // wrong answer
    alert('Uhmm. We have never talked about music taste have we?');
    console.log('user does not know my music taste (Q3)');
}
// ask user the fourth question, respond and log
// I switched the order of correct & wrong to test the logic
// however it is really annoying when reading my code later
// even though I already was using comments to indicate correct or wrong
var answer4 = prompt('Have I normally been a day person?').toUpperCase();
if (answer4 === 'YES' || answer4 === 'Y') {
    // wrong answer
    alert('Are you kidding? A "good morning" starts in the afternoon!');
    console.log('user is wrong on question 4');
} else {
    // correct answer
    alert('Yes! I have kept "vampire hours" most of my life!');
    console.log('user knows that it has been hard to tell if I am a vampire (Q4)');
}

// ask user the fifth question, respond and log
var answer5 = prompt('Do I like partner dancing?').toLowerCase();
if (answer5 === 'y' || answer5 === 'yes') {
    // correct answer
    alert('Of course that is right! I\'ve spent almost all of my life involved in swing dancing!');
    console.log('user figures I would not have spent my life on things I hate (Q5)');
} else {
    // wrong answer
    alert('Oh man, if you were correct than I would be hating my life!');
    console.log('user thinks I have hated most of my life (Q5)');
}
