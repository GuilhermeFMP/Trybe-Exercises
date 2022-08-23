function somatorio(num) {

let resultado = 0;

    for (let index = 1; index <= num; index += 1){
        resultado = resultado + index;
    }
 return resultado;
}

console.log(somatorio(5));