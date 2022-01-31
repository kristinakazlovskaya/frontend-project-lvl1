import { getRandomInt } from '../index.js';

export const primeRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getPrimeGameData = () => {
  const int = getRandomInt(1, 100);
  if (int === 1) {
    return [int, 'no'];
  }
  const question = int;
  let correctAnswer = 'yes';
  for (let i = 2; i <= int / 2; i += 1) {
    if (int % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }
  return [question, correctAnswer];
};
