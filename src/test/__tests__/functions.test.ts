import { add } from '../calculator';
import {
  capitalize,
  multiply,
  subtraction,
  division,
  fetchData,
  isEven,
  reverseString,
} from '../functions';

test('capitalize function capitalizes the first letter of a word', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('add function add two numbers correctly', () => {
  expect(add(5, 3)).toBe(8);
});

test('subtraction function subtraction two numbers correctly', () => {
  expect(subtraction(8, 3)).toBe(5);
});

test('division function divide two numbers correctly', () => {
  expect(division(10, 2)).toBe(5);
});

test('Fetch data function comparing the url parameter if is correctly', () => {
  expect(fetchData('david.com.mx')).toBe(true);
});

test('IsEven function comparing two numbers', () => {
  expect(isEven(7)).toBe(false);
});

test('ReverseString function', () => {
  expect(reverseString('Hola')).toBe('aloh');
});
