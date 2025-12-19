const capitalize = require('./capitalize');

test('return string with first character capitalized', () => {
    expect(capitalize('bla bla bla')).toBe('Bla bla bla');
});