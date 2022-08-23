let maiorNumeroPrimo = 0;

let impar = [];

let primos = [];

for (let index = 2; index <= 50; index += 1) {
    if (index % 2 != 0){
        impar.push(index);
    }
}

for (let index = 0; index < impar.length; index += 1) {
    if (impar[index] % 3 != 0){
        primos.push(impar[index]);
    }
}

for (let index = 0; index < primos.length; index += 1) {
    if (maiorNumeroPrimo < primos[index]) {
        maiorNumeroPrimo = primos[index]
    }
}

console.log(maiorNumeroPrimo);