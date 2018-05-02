'use strict';

var correctCount = 0; 

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
    correctCount++;
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
    correctCount++;
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
    correctCount++;
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
    correctCount++;
    alert('Yes! I have kept "vampire hours" most of my life!');
    console.log('user knows that it has been hard to tell if I am a vampire (Q4)');
}

// ask user the fifth question, respond and log
var answer5 = prompt('Do I like partner dancing?').toLowerCase();
if (answer5 === 'y' || answer5 === 'yes') {
    // correct answer
    correctCount++;
    alert('Of course that is right! I\'ve spent almost all of my life involved in swing dancing!');
    console.log('user figures I would not have spent my life on things I hate (Q5)');
} else {
    // wrong answer
    alert('Oh man, if you were correct than I would be hating my life!');
    console.log('user thinks I have hated most of my life (Q5)');
}

//ask user the sixth question, with 4 guesses with high low feedback to get a correct number
var toManyTries = 5;
// loop the question and answer testing, interate and say how many tries they have left or exit if they are correct
var i = 1; 

while (i < toManyTries) {
    var answer6 = prompt('How many years have I lived in my current neighborhood?');
    // [attempt ' + i + ' out of ' totalTries + '] ');
    console.log('user answered '+ answer6 + ' on attempt ' + i + ' for Q6');
    // test if they got it right on this try, or tell them if they are under or over. 
    if (answer6 === '6') {
        correctCount++;
        alert('You are correct! You figured that out in ' + i + ' attempts');
        console.log('user is correct on attempt ' + i + '!');
        i = toManyTries;
    } else if (answer6 > 6) {
        alert('Oh, it is less than that.');
        console.log('user guess is too high on attempt ' + i + '. ');
        i++;
    } else if (answer6 < 6) { // currently a null response is recored the same as a '0' and counts as a guess
        alert('Oh it is more than that. ');
        console.log('user guess is too low on attempt ' + i + '. ');
        i++;
    } else {
        alert('Hey, your answer was not in the right format. Try giving an integer');
        console.log('user did not give a valid answer. We will not count this as one of their attempts');
    }
} // end while loop for user attempts

// ask user seventh question that has multiple correct possible answers
var array = ['item1', 'item2', 'item3', 'item4'];
var flag = false;
var attemptMax = 6; 

for (var j = 0; j < attemptMax && flag === false; j++) { // I think the flag test is not needed
    var answer7 = prompt('Do you know an array item?').toLowerCase();
    console.log('user said ' + answer7 + ' for Q7');
    for (var k = 0; k < array.length; k++) {
        if (answer7 === array[k]) { // maybe a problem if array[i] is not lower case
            correctCount++;
            alert('You are correct');
            console.log('user is correct!');
            flag = true; 
            j = attemptMax; 
            k = array.length; 
        } 
    } // end for loop testing against the array
} // end for loop for user getting multiple attempts

if (flag === true) {
    console.log('user is correct!');
} else {
    console.log('user is still wrong after ' + j + ' attempts'); // I would thik we would want to limit the scoop of j to just the loop, but we gave it bigger scope
    alert('You have used all ' + attemptMax + ' of your attempts and have not gotten it. ')
}
// after user is correct, or exhausts 6 tries, report all possible correct answers. 
var arrayList = '';
for (i = 0; i < array.length; i++) {
    arrayList += array[i] + ', ';
}
arrayList = arrayList.slice(0,-2); // I got this from google search and result on stackoverflow.com
alert('Any of the following would be a correct answer: ' + arrayList);
alert('You got ' + correctCount + ' correct answers out of 7 questions.');

