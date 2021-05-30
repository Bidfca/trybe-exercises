function math(num1, num2, num3) {
    return new Promise((resolve, reject) => {
        if (Array.from(arguments).some(num => typeof num !== 'number')) return reject(new Error('Informe apenas números'));

        let result = (num1 + num2) * num3;

        if (result < 50) return reject(new Error('Valor muito baixo'));

        resolve(result);
    })
}

let generateRandomNumber = () => Math.floor(Math.random() * 100 + 1);

math(generateRandomNumber(), generateRandomNumber(), generateRandomNumber())
    .then(console.log)
    .catch(err => console.log(err.message));
