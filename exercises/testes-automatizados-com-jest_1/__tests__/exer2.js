const myRemove = require('../exer2');

it('should remove the element from the array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});


it('should not affect the original array', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 3);
    expect(array).toEqual([1, 2, 3, 4]);
});
