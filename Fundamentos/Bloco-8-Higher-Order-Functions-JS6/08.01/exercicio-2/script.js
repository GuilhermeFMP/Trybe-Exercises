const emails = (nome) => {
    return `${nome.replace(' ','_').toLowerCase()}@trybe.com`
}

const arrayNomes = ['Pedro Guerra', 'Luiza Drumond', 'Carla Paiva'];

const newEmployees = (arrayNomes, callback) => {
    const employees = {
      id1: {
        name: arrayNomes[0],
        email: callback(arrayNomes[0])
      },// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: {
        name: arrayNomes[1],
        email: callback(arrayNomes[1])
      }, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: {
        name: arrayNomes[2],
        email: callback(arrayNomes[2])
      }, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(arrayNomes, emails));