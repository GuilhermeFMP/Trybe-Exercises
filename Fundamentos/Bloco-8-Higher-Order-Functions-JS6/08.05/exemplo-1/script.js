// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Laranja', 'Morango', 'Cacau'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Suco de Laranja', 'Bolo de Chocolate', 'Pavê'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));