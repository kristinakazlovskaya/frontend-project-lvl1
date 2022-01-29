import readlineSync from 'readline-sync';
import { userName, greetUser } from './cli.js';

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const runEvenGame = () => {
  greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const numberOfAttempts = 3;
  for (let i = 0; i < numberOfAttempts; i += 1) {
    const int = getRandomInt(1, 100);
    console.log(`Question: ${int}`);
    const correctAnswer = int % 2 === 0 ? 'yes' : 'no';
    const usersAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === usersAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEvenGame;
