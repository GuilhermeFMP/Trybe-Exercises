function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercicio 1
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function addDays(days) {
    let mes = document.getElementById('days');
    for (let index = 0; index < days.length; index += 1) {
        let dia = document.createElement('li');
        mes.appendChild(dia);
        dia.innerHTML = days[index];
        mes.children[index].className = 'day';
    }
  }

  addDays(decemberDaysList);

  function addClassDecember(number, nameClass) {
    document.getElementById('days').children[number + 1].classList.add(nameClass);
  }

  addClassDecember(24, 'holiday');
  addClassDecember(25, 'holiday');
  addClassDecember(31, 'holiday');
  addClassDecember(4, 'friday');
  addClassDecember(11, 'friday');
  addClassDecember(18, 'friday');
  addClassDecember(25, 'friday');

  // Exercicio 2
function botao() {
    let pai = document.getElementsByClassName('buttons-container')[0];
    let botao = document.createElement('button');
    pai.appendChild(botao);
    botao.innerHTML = 'Feriados'
    pai.firstElementChild.id = 'btn-holiday'
}
botao();

// Exercicio 3
function corFundo () {
let feriados = document.getElementsByClassName('holiday');
  for (let index = 0; index < feriados.length; index += 1) {
    feriados[index].style.backgroundColor = 'white';
    feriados[index].style.color = '#777';
  }
}

corFundo();

function mudancaCor() {
let feriados = document.getElementsByClassName('holiday');
    for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index].style.backgroundColor === 'white') {
      feriados[index].style.backgroundColor = 'green';
      feriados[index].style.color = 'white';
    } else if (feriados[index].style.backgroundColor === 'green') {
      feriados[index].style.backgroundColor = 'white';
      feriados[index].style.color = '#777';
    }
}
}
let botaoFeriado = document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click', mudancaCor)

