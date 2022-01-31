import { getRandomInt } from '../index.js';

export const evenRules = 'Answer "yes" if the number is even, otherwise answer "no"';

export const getEvenGameData = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
