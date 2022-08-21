let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers2 = [];

for (let index = 0; index < numbers.length; index += 1) {
    let resultado = 0
    if (index < numbers.length - 1) {
        resultado = numbers[index] * numbers[index + 1];
        numbers2.push(resultado);
    } else {
        resultado = numbers[index] * 2;
        numbers2.push(resultado);
    }

}

console.log(numbers2);