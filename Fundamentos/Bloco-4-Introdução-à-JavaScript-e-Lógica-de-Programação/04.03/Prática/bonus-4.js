function todosImpares(num) {
let numerosImpares = [];
    for (let index = 1; index <= num; index += 1){
        if(index % 2 == 1){
        numerosImpares.push(index);
        }
    }
    return numerosImpares
}


function piramide(numeros) {
    for (let index = 1; index <= numeros.length; index += 1) {
        let soma = '';
    
        for (let index2 = 0; index2 < numeros.length - index; index2 += 1) {
            soma = soma + ' ';
        }
        for (let index3 = 0; index3 < numeros[index - 1]; index3 += 1) {
            soma = soma + '*'
        }
        for (let index2 = 0; index2 < numeros.length - index; index2 += 1) {
            soma = soma + ' ';
        }
    
    console.log(soma);
    }
}

piramide(todosImpares(9));