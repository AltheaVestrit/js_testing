const sum = require('./sum');
const reverseString = require('./reverse_string');
const capitalize = require('./capitalize');
const calculator = require('./calculator');
const caesarCipher = require('./caesar_cipher');
const { default: expect } = require('expect');

describe.skip("Sum", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1,2)).toBe(3);
    });
});

describe.skip("Reverse String", () => {
    test('Reverse string without spaces', () => {
        expect(reverseString('StringWithoutSpaces')).toBe('secapStuohtiWgnirtS');
    });

    test('Reverse string with spaces', () => {
        expect(reverseString('String with spaces!')).toBe('!secaps htiw gnirtS');
    });
})

describe.skip("Capitalize", () => {
    test('return string with first character capitalized', () => {
        expect(capitalize('bla bla bla')).toBe('Bla bla bla');
    });
})

describe.skip("Calculator", () => {
    test('Add 1 + 2 to equal 3', () => {
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
})

describe("Caesar Cipher", () => {
    test('Shift "abcde" with 2',() => {
        expect(caesarCipher('abcde',2)).toBe('cdefg');
    });

    test('Wrap from z to a', () => {
        expect(caesarCipher('xyz',3)).toBe('abc');
    });

    test('Case preservation', () => {
        expect(caesarCipher('HeLLo',3)).toBe('KhOOr');
    });

    test('Punctuation', () => {
        expect(caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
    });
})


