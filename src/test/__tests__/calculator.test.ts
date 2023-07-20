import { add, subtract, multiply, division } from '../calculator';
import {} from 'jest';

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts two numbers correctly', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiply two numbers correctly', () => {
  expect(multiply(10, 2)).toBe(20);
});

test('division two numbers correctly', () => {
  expect(division(8, 2)).toBe(4);
});

// Add more test cases for the other calculator functions
