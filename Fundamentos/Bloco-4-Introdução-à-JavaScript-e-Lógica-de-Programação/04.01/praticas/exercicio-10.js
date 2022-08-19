function comissao(valorCusto , valorVenda) {

let valorCustoTotal = valorCusto + (valorCusto / 100 * 20);
let lucro = valorVenda - valorCustoTotal;

if (lucro < 0) {
    console.log("Erro")
} else {
    console.log(lucro)
}

}

comissao(4000 , 6000);