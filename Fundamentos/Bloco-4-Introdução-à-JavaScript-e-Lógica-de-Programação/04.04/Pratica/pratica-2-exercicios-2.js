function maiorValorIndice(array) {
let valor = 0;
    for (let index = 0; index < array.length; index += 1) {
        if (valor < array[index]){
            valor = array[index];
        }
    }
    for (let index = 0; index < array.length; index += 1){
        if (valor === array[index]){
            return index
        }
    }
}

console.log(maiorValorIndice([2, 3, 6, 7, 10, 1]));