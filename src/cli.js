import readlineSync from "readline-sync";

export const greetUser = () => {
  const userName = readlineSync.question(
    "Welcome to the Brain Games!\nMay I have your name? "
  );
  console.log(`Hello, ${userName}!`);
};