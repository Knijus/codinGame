const testSubject = require('../index');
const fs = require('fs');

test('Simple case. Smallest difference is 1', () => {
  const input = fs.readFileSync('./simpleCase.txt', 'utf-8');
  const output = testSubject(input);
	expect(output).toBe(1);
});

test('Horses in any order. Smallest difference is 1', () => {
  const input = fs.readFileSync('./horsesInAnyOrder.txt', 'utf-8');
  const output = testSubject(input);
  expect(output).toBe(1);
});

test('Many horses. Smallest difference is 47', () => {
  const input = fs.readFileSync('./manyHorses.txt', 'utf-8');
  const output = testSubject(input);
  expect(output).toBe(47);
});