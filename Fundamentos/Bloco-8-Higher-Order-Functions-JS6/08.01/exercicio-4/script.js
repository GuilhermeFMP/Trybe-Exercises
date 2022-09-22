const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const pontuacao = (gabarito, respostas) => {
    let resultado = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if (gabarito[index] === respostas[index]){
            resultado += 1;
        } 
        if (gabarito[index] !== respostas[index] && respostas[index] !== 'N.A') {
            resultado -= 0.5;
        }
    }
    return resultado;
}

const exam = (gabarito, respostas, pontuacao) => {
    return `Sua pontuação foi de ${pontuacao(gabarito,respostas)}.`
}

console.log(exam(RIGHT_ANSWERS, STUDENT_ANSWERS, pontuacao));