const index = require('./index');
const fs = require('fs');
const simpleCase = fs.readFileSync('./testCaseScenarios/simpleCase.txt', 'utf-8');
const horseInAnyOrder = fs.readFileSync('./testCaseScenarios/horsesInAnyOrder.txt', 'utf-8');
const manyHorses = fs.readFileSync('./testCaseScenarios/manyHorses.txt', 'utf-8');

test('Simple case. Smallest difference is 1', () => {
	expect(index(simpleCase)).toBe(1);
  });

  test('Horses in any order. Smallest difference is 1', () => {
	expect(index(horseInAnyOrder)).toBe(1);
  });

  test('Many horses. Smallest difference is 47', () => {
	expect(index(manyHorses)).toBe(47);
  });