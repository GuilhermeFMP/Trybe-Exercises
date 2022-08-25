function menorValorIndice(array) {

let valor = 0;

    for (let index = 0; index < array.length; index += 1) {
        if (valor < array[index]){
            valor = array[index];
        }
    }

let menor = valor;

    for (let index = 0; index < array.length; index += 1){
        if (menor > array[index]){
            menor = array[index]
        }
    }
    for (let index = 0; index < array.length; index += 1){
        if (menor === array[index]){
            return index
        }
    }
}
    
console.log(menorValorIndice([2, 4, 6, 7, 10, 0, -3]));