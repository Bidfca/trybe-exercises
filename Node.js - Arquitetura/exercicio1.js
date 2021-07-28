const fs = require('fs');

const start = Date.now();

const startFile = Date.now();
const file = fs.readFileSync(__dirname + '/arq.txt');
const endFile = Date.now();

const end = Date.now();

console.log(end - start);
console.log(endFile - startFile);
console.log(file.byteLength);