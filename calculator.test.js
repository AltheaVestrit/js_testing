const calculator = require('./calculator');

test('Adds 1 + 2 to equal 3', () => {
    expect(calculator.add(1,2)).toBeCloseTo(3);
});

test('Substract 5 from 3', () => {
    expect(calculator.substract(3,5)).toBe(-2);
});

test('Divide 10 by 4', () => {
    expect(calculator.divide(10,4)).toBe(2.5);
});

test('Multiply 3 by 7', () => {
    expect(calculator.multiply(3,7)).toBe(21);
});