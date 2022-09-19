const facturial = (num) => {
    let result = 1;
    for (let index = 1; index <= num; index += 1 ) {
        result = result * index;
    }
    return `Esse é o fatorial ${result}.`
}

console.log(facturial(4));