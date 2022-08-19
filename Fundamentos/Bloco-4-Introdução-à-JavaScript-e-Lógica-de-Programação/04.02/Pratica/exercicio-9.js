let do1Ao25 = [];

for (let index = 1; index <= 25; index += 1) {
    do1Ao25.push(index);
}

let divididoPor2 = [];

for (let index = 0; index < do1Ao25.length; index += 1) {
    let resultado = 0;
    resultado = do1Ao25[index] / 2;
    divididoPor2.push(resultado);
}

console.log(divididoPor2);