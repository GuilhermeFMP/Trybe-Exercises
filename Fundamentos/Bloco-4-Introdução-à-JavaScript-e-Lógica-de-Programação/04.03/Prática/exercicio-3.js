let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = '';
let menorPalavra = '';

for (let index = 0; index < array.length; index += 1) {
    let palavra = array[index];
    if (maiorPalavra.length < palavra.length)
    maiorPalavra = palavra;
}

menorPalavra = maiorPalavra

for (let index = 0; index < array.length; index += 1) {
    let palavra = array[index];
    if (menorPalavra.length > palavra.length)
    menorPalavra = palavra;
}

console.log(maiorPalavra);
console.log(menorPalavra);