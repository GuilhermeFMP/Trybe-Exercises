const splitWord = (frase, separador) =>  {
    let listaDePalavras = frase.split(separador);
    return listaDePalavras
}

const longestWord = (splitWord) => {
    let posição = 0;
    for (let index = 0; index < splitWord.length; index += 1) {
        let numeroLetras = splitWord[index].length;
        for (let index2 = 0; index2 < splitWord.length; index2 += 1) {
            if (numeroLetras < splitWord[index2].length) {
            posição = index2;
            }
        }
    }
    return splitWord[posição];
}
console.log(longestWord(splitWord('Antônio foi ao banheiro e não sabemos o que aconteceu', " ")));
