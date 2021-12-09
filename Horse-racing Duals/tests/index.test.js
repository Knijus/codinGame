describe("Index.js function",() => {
  const testSubject = require('../src/index');
  const fs = require('fs');
  const path = require("path");

  beforeAll(() => {
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Simple case. Smallest difference is 1', () => {
    const input = fs.readFileSync(path.join(__dirname, "simpleCase.txt"), 'utf-8');
    testSubject(input);
    expect(console.log).toBeCalledWith(1);
  });

  test('Horses in any order. Smallest difference is 1', () => {
    const input = fs.readFileSync(path.join(__dirname, "horsesInAnyOrder.txt"), 'utf-8');
    testSubject(input);
    expect(console.log).toBeCalledWith(1);
  });

  test('Many horses. Smallest difference is 47', () => {
    const input = fs.readFileSync(path.join(__dirname, "manyHorses.txt"), 'utf-8');
    testSubject(input);
    expect(console.log).toBeCalledWith(47);
  });
});

