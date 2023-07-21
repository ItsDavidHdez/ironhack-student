export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function subtraction(a: number, b: number): number {
  return a - b;
}

export function division(a: number, b: number): number {
  return a / b;
}

export function fetchData(url: string) {
  if (url === 'david.com.mx') {
    return true;
  } else {
    false;
  }
}

export function isEven(a: number): boolean {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

export function reverseString(word: string): string {
  let newString = '';
  const actuallyString = word.toLocaleLowerCase();

  for (var i = actuallyString.length - 1; i >= 0; i--) {
    newString += actuallyString[i];
  }
  return newString;
}
