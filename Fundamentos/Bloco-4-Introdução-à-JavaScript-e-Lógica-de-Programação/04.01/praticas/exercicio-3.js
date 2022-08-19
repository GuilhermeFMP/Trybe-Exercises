function numeroMaior(a , b , c) {

if (a > b && a > c) {
    console.log("O maior número é", a);
} else if (a < b && b > c) {
    console.log("O maior número é", b);
} else if (a < c && b < c) {
    console.log("O maior número é", c);
} else {
    console.log("os numeros são iguais");
}

}

numeroMaior(7 , 10 , 5);