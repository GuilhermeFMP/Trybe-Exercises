const awake = () => 'Acordando!!';

const coffee = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(awake));
console.log(doingThings(coffee));
console.log(doingThings(sleep));