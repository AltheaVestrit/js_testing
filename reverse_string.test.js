const reverseString = require('./reverse_string');

test('Reverse string without spaces', () => {
    expect(reverseString('StringWithoutSpaces')).toBe('secapStuohtiWgnirtS');
});

test('Reverse string with spaces', () => {
    expect(reverseString('String with spaces!')).toBe('!secaps htiw gnirtS');
});