const getUserName = require('./exer2e3');

test('if getUserName returns name from the corresponding id', () => {
    expect.assertions(1);
    return getUserName(4).then(name => expect(name).toEqual('Mark'));
});

test('if getUserName returns error if id!', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => expect(error).toEqual({ error: 'User with 6 not found.' }));
});