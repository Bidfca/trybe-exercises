const fs = require('fs').promises;

async function listCharacters() {
    const characters = await fs.readFile('./simpsons.json', 'utf-8')
        .then((data) => JSON.parse(data));

    characters.forEach(({ id, name }) => {
        console.log(`${+id + 1} - ${name}`);
    });
}

async function characterById(id) {
    const characters = await fs.readFile('./simpsons.json', 'utf-8')
        .then((data) => JSON.parse(data));

    let character = characters.filter((c) => c.id == id);

    if (!character) throw new Error('id não encontrado');

    return character;
}

async function alterIds() {
    const characters = await fs.readFile('./simpsons.json', 'utf-8')
        .then((data) => JSON.parse(data));

    let filteredCharacters = characters.filter(character => character.id !== '10' && character.id !== '6');

    fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacters));
}
