function ganhos(salario) {

let inss = 0;
let ir = 0;

if (salario > 5189.92) {
    inss = 570.88;
} else if (salario >= 2594.93 && salario < 5189.82) {
    inss = salario / 100 * 11;
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = salario / 100 * 9;
} else {
    inss = salario / 100 * 8;
}

let salarioBase = salario - inss;

if (salarioBase > 4664.68) {
    ir = (salarioBase / 100 * 27.5) - 869.36;
} else if (salarioBase >= 3751.06 && salarioBase <= 46664.68) {
    ir = (salarioBase / 100 * 22.5) - 636.13;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    ir = (salarioBase / 100 * 15) - 354.80;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    ir = (salarioBase / 100 * 7.5) - 142.80;
} else {
    ir = 0
}

let salarioLiquido = salarioBase - ir;

console.log(salarioLiquido)

}

ganhos(3500);