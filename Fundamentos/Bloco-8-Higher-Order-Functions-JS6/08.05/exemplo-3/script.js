const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

const [hello, func] = saudacoes

console.log(hello)
// Produza o mesmo resultado acima, porém utilizando array destructuring