const divide = require('../src/divide');

test('divides 6 by 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
});

test('divides 5 by 2 to equal 2.5', () => {
    expect(divide(5, 2)).toBe(2.5);
});

test('throws an error when dividing by zero', () => {
    expect(() => divide(4, 0)).toThrow('Cannot divide by zero');
});