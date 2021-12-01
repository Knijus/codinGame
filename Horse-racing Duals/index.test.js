const index = require('./index');
const fs = require('fs');
const simpleCase = fs.readFileSync('./simpleCase.txt', 'utf-8');
const horseInAnyOrder = fs.readFileSync('./horsesInAnyOrder.txt', 'utf-8');

test('Simple case', () => {
	expect(index(simpleCase)).toBe(1);
  });

  test('Horses in any order', () => {
	expect(index(horseInAnyOrder)).toBe(1);
  });
