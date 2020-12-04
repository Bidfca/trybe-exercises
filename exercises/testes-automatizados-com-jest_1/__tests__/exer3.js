const objects = require('../exer3');

it('should compare if two objects are equal', () => {
    expect(objects.obj1).toEqual(objects.obj2);
    expect(objects.obj1).not.toEqual(objects.obj3);
});
