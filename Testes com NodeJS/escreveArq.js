const fs = require('fs');

const escreveArq = (arq, data) => {
    fs.writeFileSync(`${__dirname}/${arq}`, data);
    
    return 'ok';
}

module.exports = escreveArq;