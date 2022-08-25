function repetente(array){
let countExterno = 0;
let nameExterno = 0;

for (let index = 0; index < array.length; index += 1){
    let count = 0;

    for (let index2 = 0; index2 < array.length; index2 += 1){

        if (array[index] == array[index2]){
          count++;
        }
    }

    if  (count > countExterno){
        countExterno = count;
        nameExterno = array[index];
    }
}

return nameExterno;

}

console.log(repetente([2, 3, 2, 5, 8, 2, 3]));