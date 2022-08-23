function verificaPalindrome(string){

    for (let index = 0; index < string.length; index += 1){
        let palavraAoContrario = ''
            for (let index2 = string.length - 1; index2 >= 0; index2 -= 1){
                palavraAoContrario = palavraAoContrario + string[index2]
            }
        if (string == palavraAoContrario){
            return true;
        } else {
            return false;
        }

    }
}

console.log(verificaPalindrome('arara'));