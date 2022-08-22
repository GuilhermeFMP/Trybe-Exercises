function quadrado(numero) {

for (let index = 1; index <= numero; index += 1) {
    let asteriscos = '*';
    for (let index = 1; index <= numero; index += 1) {
        asteriscos = asteriscos + '*';
    }

    console.log(asteriscos);
}


}

quadrado(5);