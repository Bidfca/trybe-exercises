const testNum = (num) => {
    if (num > 0) return 'positivo';

    if (num < 0) return 'negativo';

    return 'neutro';
}

module.exports = testNum;