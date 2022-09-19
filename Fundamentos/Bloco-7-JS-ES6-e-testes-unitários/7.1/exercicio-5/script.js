const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let arrayFrase = frase.split(" ");
    arrayFrase[1] = nome;
    return `${arrayFrase[0]} ${arrayFrase[1]} ${arrayFrase[2]}`
}

const minhasSkills = (frase) => {
    const skills = ['HTML', 'CSS', 'JS'];
    let template = 'Minhas três principais habilidades são:'
    return `${frase}
${template}
* ${skills[0]}
* ${skills[1]}
* ${skills[2]}`
}

console.log(minhasSkills(substituaX('Guilherme')));