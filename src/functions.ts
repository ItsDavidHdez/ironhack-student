const arrayForAverage = [100, 209, 300, 1, 34, 442, 944, 23];
const wordForReverse = 'Anita lava la tina';
const numberIsEven = 10;

function calculateSum(a: number, b: number): number {
  return a + b;
}

function isEven(a: number): boolean {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function reverseString(word: string): string {
  let newString = '';
  const actuallyString = word.toLocaleLowerCase();

  for (var i = actuallyString.length - 1; i >= 0; i--) {
    newString += actuallyString[i];
  }
  return newString;
}

const calculateAverage = (arrayNumbers: number[]): number => {
  let total: number = 0;
  for (let index = 0; index < arrayNumbers.length; index++) {
    total += arrayNumbers[index];
  }

  const average = total / arrayNumbers.length;
  return average;
};

type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a: number, b: number): number => a * b;

calculateSum(10, 5);
isEven(numberIsEven);
reverseString(wordForReverse);
calculateAverage(arrayForAverage);
multiply(10, 2);
