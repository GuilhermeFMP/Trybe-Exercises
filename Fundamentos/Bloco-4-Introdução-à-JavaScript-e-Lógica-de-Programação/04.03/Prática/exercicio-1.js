function fatorial(valor) {

let resultado = 1;

for (let index = 1; index <= valor; index += 1) {
    resultado = resultado * index;
}

console.log(resultado);

}

fatorial(10);