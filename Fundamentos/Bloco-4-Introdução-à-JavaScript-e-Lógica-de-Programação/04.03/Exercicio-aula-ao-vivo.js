// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

function rockPaperScissor (player1 , player2) {

if (player1 === 'pedra' && player2 === 'tesoura' || player1 === 'papel' && player2 === 'pedra' || player1 === 'tesoura' && player2 === 'papel') {
    console.log('Player 1 won');
} else if (player1 === 'pedra' && player2 === 'papel' || player1 === 'papel' && player2 === 'tesoura' || player1 === 'tesoura' && player2 === 'pedra') {
    console.log('Player 2 won')
} else {
    console.log('A Ties')
}

}

rockPaperScissor('tesoura' , 'tesoura');