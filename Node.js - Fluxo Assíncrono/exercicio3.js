const math = require('./exercicio1');

let generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

async function asyncMath() {
    try {
        const result = await math(generateRandomNumber(), generateRandomNumber(), generateRandomNumber());
        console.log(result);
    } catch (err) {
        console.error(err.message);
    }
}

asyncMath();
