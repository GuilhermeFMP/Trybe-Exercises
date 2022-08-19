function triangulo(angulo1 , angulo2 , angulo3) {

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("erro");
} else if (angulo1 + angulo2 + angulo3 == 180) {
    console.log("true");
} else {
    console.log("false");
}

}

triangulo(60 , 60 , 60);