import { getRandomInt } from '../index.js';

export const progressionRules = 'What number is missing in the progression?';

export const getProgressionGameData = () => {
  const firstInt = getRandomInt(1, 50);
  const sequence = [firstInt];
  const step = getRandomInt(1, 10);
  const position = getRandomInt(0, 9);

  for (let i = 1; i < 10; i += 1) {
    sequence.push(sequence[sequence.length - 1] + step);
  }
  const correctAnswer = sequence[position];
  sequence[position] = '..';
  const question = sequence.join(' ');
  return [question, correctAnswer];
};
