const testSubject = require('../src/index');
const fs = require('fs');
const path = require("path");

test('Simple case. Smallest difference is 1', () => {
  const input = fs.readFileSync(path.join(__dirname, "simpleCase.txt"), 'utf-8');
  const output = testSubject(input);
	expect(output).toBe(1);
});

test('Horses in any order. Smallest difference is 1', () => {
  const input = fs.readFileSync(path.join(__dirname, "horsesInAnyOrder.txt"), 'utf-8');
  const output = testSubject(input);
  expect(output).toBe(1);
});

test('Many horses. Smallest difference is 47', () => {
  const input = fs.readFileSync(path.join(__dirname, "manyHorses.txt"), 'utf-8');
  const output = testSubject(input);
  expect(output).toBe(47);
});