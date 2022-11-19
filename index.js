import * as readLineSync from 'readline-sync';
import chalk from 'chalk';

var score = 0;

var highScore = [
  {
    name: 'Sanika',
    score: '6'
  },
  {
    name: 'Shailey',
    score: '5'
  }
];

var questionBank = [
  {
    question: 'Which superhero does Bruce Banner transform into?',
    answer: 'Hulk',
  },
  {
    question: 'What is spiderman\'s real name?',
    answer: 'Peter Parker'
  },
  {
    question: 'J.A.R.V.I.S was programmed by Captain America. True or false?',
    answer: 'False'
  },
  {
    question: 'What is the strongest metal in the Marvel Universe?',
    answer: 'Vibranium'
  },
  {
    question: 'Who is the leader of S.H.I.E.L.D?',
    answer: 'Nick Fury'
  },
  {
    question: 'Who is Loki\'s adoptive brother?',
    answer: 'Thor'
  }
];

function welcome() {
  var userName = readLineSync.question("Hey Genius, What's your name? ");
  console.log(chalk.underline('Hii', userName + '!\n'));
  console.log('Let\'s get Started with the Quiz, Shall we?');
  console.log("-------------------------\n");
}

function runQuiz(question, answer) {
  var answerGiven = readLineSync.question(question + '\n');
  if (answerGiven.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bgGreen("You are Right!"));
    score++;
  }
  else {
    console.log(chalk.bgRed('Oops! Wrong answer'));
  }
  console.log('Your score is: ' + score);
  console.log("-------------------------\n");
}

function playGame() {
  for (let i = 0; i < questionBank.length; i++) {
    runQuiz(questionBank[i].question, questionBank[i].answer);
  }
}

function displayScore() {
  console.log(chalk.black.bgWhite.bold('YAYYY!, Your final score is: ' + score + "/" + questionBank.length));
  console.log('The high scores are:');
  for (let i = 0; i < highScore.length; i++) {
    console.log(highScore[i].name + ": " + highScore[i].score);
  }
}

welcome();
playGame();
displayScore();
