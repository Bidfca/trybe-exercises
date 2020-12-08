const getUserName = require('./exer2e3');

test('if getUserName returns name from the corresponding id', async () => {
    expect.assertions(1);
    const name = await getUserName(4);
    expect(name).toEqual('Mark');
});

test('if getUserName returns error if id!', async () => {
    expect.assertions(1);
    try {
        await getUserName(6);
    } catch (error) {
        expect(error).toEqual({ error: 'User with 6 not found.' });
    }
});