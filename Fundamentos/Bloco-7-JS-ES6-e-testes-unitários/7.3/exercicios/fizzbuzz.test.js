const myFizzBuzz = require('./fizzbuzz.js');

describe('testa a função myFizzBuzz', () => {
    it('Se o numero é divisivel por 3 e 5 deve retornar fizzbuzz', () => {
        expect(myFizzBuzz(30)).toBe('fizzbuzz');
    });
    it('Se o numero divisivel 3 retorna fizz e 5 retorna buzz', () => {
        expect(myFizzBuzz(12)).toBe('fizz');
        expect(myFizzBuzz(20)).toBe('buzz');
    });
    it('Se o numero não for divisivel por 3 ou 5 deve retornar o próprio numero', () => {
        expect(myFizzBuzz(8)).toBe(8);
    });
    it('Se não for um número deve retornar falso', () => {
        expect(myFizzBuzz('cavalo')).toBeFalsy();
    });
});