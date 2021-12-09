const testSubject = require('../src/index');
const fs = require('fs');
const path = require("path");

test('Velocity-centric race. Smallest difference is 4492', () => {
	const input = fs.readFileSync(path.join(__dirname, "velocity-centric.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(4492);
});

test('Elegance-centric race. Smallest difference is 98020', () => {
	const input = fs.readFileSync(path.join(__dirname, "Elegance-centric.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(98020);
});

test('Balanced horses. Smallest difference is 107044', () => {
	const input = fs.readFileSync(path.join(__dirname, "Balanced_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(107044);
});

test('Linear horses. Smallest difference is 29220', () => {
	const input = fs.readFileSync(path.join(__dirname, "Linear_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(29220);
});

test('Affine horses. Smallest difference is 226173', () => {
	const input = fs.readFileSync(path.join(__dirname, "Affine_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(226173);
});

test('Bimodal horses. Smallest difference is 4492', () => {
	const input = fs.readFileSync(path.join(__dirname, "Bimodal_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(4492);
});

test('2D horses. Smallest difference is 345805', () => {
	const input = fs.readFileSync(path.join(__dirname, "2D_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(345805);
});

test('A fistful of horses. Smallest difference is 97225', () => {
	const input = fs.readFileSync(path.join(__dirname, "Fistful_of_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(97225);
});


test('For a few horse more. Smallest difference is 35608', () => {
	const input = fs.readFileSync(path.join(__dirname, "For_few_horse_more.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(35608);
});

test('All your horse are belong to us. Smallest difference is 33322', () => {
	const input = fs.readFileSync(path.join(__dirname, "All_your_horse_are_belong_to_us.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(33322);
});

test('Many horses. Smallest difference is 1293', () => {
	const input = fs.readFileSync(path.join(__dirname, "Many_horses.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(1293);
});

test('Mmmaaannn, That Sucks!. Smallest difference is 0', () => {
	const input = fs.readFileSync(path.join(__dirname, "That_sucks.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(0);
});

test("Don't overflow your stack. Smallest difference is 0", () => {
	const input = fs.readFileSync(path.join(__dirname, "Dont_overflow_your_stack.txt"), 'utf-8');
	const output = testSubject(input);
	expect(output).toBe(0);
});
