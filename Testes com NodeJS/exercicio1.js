const chai = require('chai');

const testeNum = require('./testeNum');

describe('Executa a função testNum', () => {
    describe('quando o número for maior que 0', () => {
        describe('a resposta', () => {
            it('é uma string', () => {
                const resposta = testeNum(10);
                chai.expect(resposta).to.be.a('string');
            });
            it('é igual a positivo', () => {
                const resposta = testeNum(10);
                chai.expect(resposta).to.be.equals('positivo');
            });
        });
    });

    describe('quando o número for menor que 0', () => {
        describe('a resposta', () => {
            it('é uma string', () => {
                const resposta = testeNum(-10);
                chai.expect(resposta).to.be.a('string');
            });
            it('é igual a negativo', () => {
                const resposta = testeNum(-10);
                chai.expect(resposta).to.be.equals('negativo');
            });
        });
    });

    describe('quando o número for igual a 0', () => {
        describe('a resposta', () => {
            it('é uma string', () => {
                const resposta = testeNum(0);
                chai.expect(resposta).to.be.a('string');
            });
            it('é igual a neutro', () => {
                const resposta = testeNum(0);
                chai.expect(resposta).to.be.equals('neutro');
            });
        });
    });
});