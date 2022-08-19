function xadrez(peça) {
peça = peça.toLowerCase()

switch (peça) {
    case "tower" :
    console.log("horizontally and vertically");
    break;

    case "horse" :
    console.log("2 tiles horizontally and 1 tile vertically or 2 tiles vertically and 1 tile horrizontally");
    break;

    case "bishop" :
    console.log("diagonals")
    break;

    case "queen" :
    console.log("horizontally, vertically and diagonals");
    break;

    case "king" :
    console.log("1 tile horizontally, vertically or diagonals")
    break;

    case "pawn" :
    console.log("1 tile vertically");
    break;

    default:
    console.log("Erro")

}

}

xadrez("King");