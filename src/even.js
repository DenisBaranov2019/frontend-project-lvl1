import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain-Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const isEven = (num) => num % 2 === 0;

  let count = 0;
  while (count < 3) {
    const number = getRandomInRange(0, 20);
    console.log(`Question: ${number}`);
    const UserAnswer = (readlineSync.question('Answer: '));
    const result = isEven(number) ? 'yes' : 'no';
    if (UserAnswer === result) {
      console.log('Correct!');
      count += 1;
      if (count === 3) {
        console.log(`Congratulation, ${name}!`);
      }
    } else if (result === 'no') {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
      count = 3;
    } else {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
      count = 3;
    }
  }
};
