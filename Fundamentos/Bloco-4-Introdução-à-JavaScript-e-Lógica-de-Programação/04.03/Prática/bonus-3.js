function piramide(numero) {
    
for (let index = 1; index <= numero; index += 1) {
    let soma = '';

    for (let index2 = 0; index2 < numero - index; index2 += 1) {
        soma = soma + ' ';
    }
    for (let index3 = 0; index3 < index; index3 += 1) {
            soma = soma + '*'
        }

    console.log(soma);
    }

}

piramide(5)