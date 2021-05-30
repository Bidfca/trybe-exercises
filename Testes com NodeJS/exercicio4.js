const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');

const escreveArq = require('./escreveArq');

describe('Executa a função escreveArq', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
        fs.writeFileSync.restore();
    });

    describe('a resposta', () => {
        it('é uma string', () => {
            const resposta = escreveArq('arquivo.txt', 'Hello World');
            expect(resposta).to.be.a('string');
        });
        it('é igual a "ok"', () => {
            const resposta = escreveArq('arquivo.txt', 'Hello World');
            expect(resposta).to.be.equals('ok');
        });
    });
});