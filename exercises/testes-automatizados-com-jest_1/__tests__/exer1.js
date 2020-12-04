const sum = require('../exer1');

it('should add two numbers', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
});

it('should throw an error if a string is passed as a parameter', () => {
    expect(() => { sum(4, "5") }).toThrow();
});

it('should throw error message "parameters must be numbers" if a string is passed as a parameter', () => {
    expect(() => { sum(4, "5") }).toThrowError(new Error('parameters must be numbers'));
})