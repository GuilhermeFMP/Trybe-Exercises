const winOrLose = (resultado, aposta) => {
    if (resultado === aposta) {
        return 'Parabéns você ganhou'
    }
    return 'Tente novamente'


};

const result = (numeroAposta, callback) => {
    let numeroSorteado = Number(Math.floor(Math.random() * 5 + 1))
    return callback(numeroSorteado, numeroAposta)
};

console.log(result(2, winOrLose));
