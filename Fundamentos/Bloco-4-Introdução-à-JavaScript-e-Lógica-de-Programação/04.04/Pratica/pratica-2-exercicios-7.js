function verificaFimPalavra(string , end){
let endWord = '';

for (let index = string.length - end.length; index < string.length; index += 1) {
    endWord = endWord + string[index];
}

if (end == endWord){
    return true;
} else {
    return false;
}

}

console.log(verificaFimPalavra('Trybe' , 'be'));