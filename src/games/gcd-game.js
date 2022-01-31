import { getRandomInt } from '../index.js';

export const gcdRules = 'Find the greatest common divisor of given numbers.';

export const getGcdGameData = () => {
  const firstInt = getRandomInt(1, 100);
  const secondInt = getRandomInt(1, 100);
  const question = `${firstInt} ${secondInt}`;
  let correctAnswer;
  const smallestInt = firstInt <= secondInt ? firstInt : secondInt;
  for (let i = smallestInt; i > 0; i -= 1) {
    if (firstInt % i === 0 && secondInt % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  return [question, correctAnswer];
};
