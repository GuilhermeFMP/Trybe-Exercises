function maiorCaracter(array) {
let maiorNome = '';
    for (let index = 0; index < array.length; index += 1) {
        for(let index2 = 0; index2 < array.length; index2 += 1){
            if (array[index].length < array[index2].length){
                maiorNome = array[index2];
            }
        }
    }
return maiorNome;
}

console.log(maiorCaracter(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));