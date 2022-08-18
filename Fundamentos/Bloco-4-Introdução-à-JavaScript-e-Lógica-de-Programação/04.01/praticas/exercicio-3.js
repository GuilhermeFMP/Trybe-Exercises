const a = 7;
const b = 4;
const c = 10;

if (a > b && a > c) {
    console.log("O maior número é", a);
} else if (a < b && b > c) {
    console.log("O maior número é", b);
} else if (a < c && b < c) {
    console.log("O maior número é", c);
} else {
    console.log("os numeros são iguais");
}