import { getRandomInt } from '../index.js';

export const calcRules = 'What is the result of the expression?';

export const getCalcData = () => {
  const operands = ['+', '-', '*'];
  const firstOperator = getRandomInt(1, 50);
  const secondOperator = getRandomInt(1, firstOperator);
  const operand = operands[getRandomInt(0, 2)];
  const question = `${firstOperator} ${operand} ${secondOperator}`;
  let correctAnswer;
  if (operand === '+') {
    correctAnswer = firstOperator + secondOperator;
  } else if (operand === '-') {
    correctAnswer = firstOperator - secondOperator;
  } else if (operand === '*') {
    correctAnswer = firstOperator * secondOperator;
  }
  return [question, correctAnswer];
};
