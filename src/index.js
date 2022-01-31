import readlineSync from 'readline-sync';
import { userName, greetUser } from './cli.js';

export const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

export const startGame = (rules, data) => {
  greetUser();
  console.log(rules);
  const numberOfAttempts = 3;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const [question, correctAnswer] = data();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
