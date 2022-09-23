const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  const divible = array.find((number) => number % 3 === 0 && number % 5 === 0)
  return divible;
};

console.log(findDivisibleBy3And5(numbers));