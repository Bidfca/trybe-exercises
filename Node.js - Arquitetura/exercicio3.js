const fs = require('fs');

const start = Date.now();

fs.readdir(__dirname + '/folder', (_, files) => {
    console.log(files.length);

    const fileSizes = [];

    const logEnd = () => {
        if (fileSizes.length === files.length) {
            const sum = fileSizes.reduce((sum, fileSize) => sum += fileSize);
            console.log(sum);

            const end = Date.now();
            console.log(end - start);
        }
    }

    files.forEach((name) => {
        fs.readFile(__dirname + `/folder/${name}`,
            (_, file) => {
                fileSizes.push(file.byteLength);
                logEnd();
            });
    });
});
