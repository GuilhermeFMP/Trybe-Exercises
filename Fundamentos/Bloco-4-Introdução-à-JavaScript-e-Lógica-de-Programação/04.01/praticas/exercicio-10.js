const valorCusto = 4000;
const valorVenda = 6000;

let valorCustoTotal = valorCusto + (valorCusto / 100 * 20);
let lucro = valorVenda - valorCustoTotal;

if (lucro < 0) {
    console.log("Erro")
} else {
    console.log(lucro)
}