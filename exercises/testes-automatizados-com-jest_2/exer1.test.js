const uppercase = require('./exer1');

test('if uppercase converts a string to uppercase', (done) => {
    uppercase('trybe', (string) => {
        expect(string).toBe('TRYBE');
        done();
    });
});