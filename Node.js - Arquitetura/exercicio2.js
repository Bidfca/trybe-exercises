const fs = require('fs');

const start = Date.now();

const files = fs.readdirSync(__dirname + '/folder');

const sum = files.reduce((sum, name) => {
    const file = fs.readFileSync(__dirname + `/folder/${name}`);
    sum += file.byteLength;
    return sum;
}, 0);

console.log(files.length);
console.log(sum);

const end = Date.now();

console.log(end - start);


