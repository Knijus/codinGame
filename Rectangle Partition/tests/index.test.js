const testSubject = require('../src/index');
const fs = require('fs');
const path = require("path");

test('Sample. Number of squares is 4', () => {
	const input = fs.readFileSync(path.join(__dirname, "Sample.txt"), 'utf-8');
 	const output = testSubject(input);
	expect(output).toBe(4);
});

test('Simple case. Number of squares is 14', () => {
	const input = fs.readFileSync(path.join(__dirname, "Squarish.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(14);
});

test('Bigger 1. Number of squares is 123', () => {
	const input = fs.readFileSync(path.join(__dirname, "Bigger_1.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(123);
});

test('Bigger 2. Number of squares is 36', () => {
	const input = fs.readFileSync(path.join(__dirname, "Bigger_2.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(36);
});

test('Lo-density 1. Number of squares is 25', () => {
	const input = fs.readFileSync(path.join(__dirname, "Lo-density_1.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(25);
});

test('Lo-density 2. Number of squares is 0', () => {
	const input = fs.readFileSync(path.join(__dirname, "Lo-density_2.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(0);
});

test('Hi-density 1. Number of squares is 22281', () => {
	const input = fs.readFileSync(path.join(__dirname, "Hi-density_1.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(22281);
});

test('Hi-density 2. Number of squares is 18431', () => {
	const input = fs.readFileSync(path.join(__dirname, "Hi-density_2.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(18431);
});

test('Imbalance. Number of squares is 42', () => {
	const input = fs.readFileSync(path.join(__dirname, "Imbalance.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(42);
});
  