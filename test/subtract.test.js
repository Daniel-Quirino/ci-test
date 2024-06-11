const subtract = require('../src/subtract');

test('subtracts 2 - 1 to equal 1', () => {
    expect(subtract(2, 1)).toBe(1);
});

test('subtracts 1 - 1 to equal 0', () => {
    expect(subtract(1, 1)).toBe(0);
});