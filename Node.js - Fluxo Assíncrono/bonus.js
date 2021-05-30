const fs = require('fs/promises');
const readline = require('readline');

function question(message) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(message, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

async function readArchive() {
    const file = await question('Digite o caminho do arquivo: ');

    try {
        const data = await fs.readFile(file, 'utf-8');

        console.log(data);
    } catch (err) {
        console.log('Arquivo não existe');
    }
}

readArchive();