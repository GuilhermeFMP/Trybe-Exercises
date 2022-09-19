const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (array) => {
const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
};
const sortedArrayBonus = sortOddsAndEvens(oddsAndEvens);
// Seu código aqui.

console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente!`);