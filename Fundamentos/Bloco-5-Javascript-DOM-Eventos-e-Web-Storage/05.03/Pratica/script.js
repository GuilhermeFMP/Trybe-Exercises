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
  }
}

corFundo();

function mudancaCor() {
let feriados = document.getElementsByClassName('holiday');
    for (let index = 0; index < feriados.length; index += 1) {
    if (feriados[index].style.backgroundColor === 'white') {
      feriados[index].style.backgroundColor = 'skyblue';
    } else if (feriados[index].style.backgroundColor === 'skyblue') {
      feriados[index].style.backgroundColor = 'white';
    }
}
}
let botaoFeriado = document.getElementById('btn-holiday');
botaoFeriado.addEventListener('click', mudancaCor)

// Exercicio 4
function botaoFriday() {
  let pai = document.getElementsByClassName('buttons-container')[0];
  let botao = document.createElement('button');
  pai.appendChild(botao);
  botao.innerHTML = 'Sexta-feira'
  pai.firstElementChild.nextElementSibling.id = 'btn-friday'
}
botaoFriday();

// Exercicio 5
function corTexto () {
  let feriados = document.getElementsByClassName('friday');
    for (let index = 0; index < feriados.length; index += 1) {
      feriados[index].style.color = 'rgb(119, 119, 119)';
    }
  }
  
  corTexto();
  
  function mudancaCorTexto() {
  let feriados = document.getElementsByClassName('friday');
      for (let index = 0; index < feriados.length; index += 1) {
      if (feriados[index].style.color === 'rgb(119, 119, 119)') {
        feriados[index].style.color = 'red';
      } else if (feriados[index].style.color === 'red') {
        feriados[index].style.color = 'rgb(119, 119, 119)';
      }
  }
  }
  let botaoSextaFeira = document.getElementById('btn-friday');
  botaoSextaFeira.addEventListener('click', mudancaCorTexto)


  // Exercicio 6
  function zoom(event) {
    event.target.style.fontSize = '30px';
  }
  function zoomOut(event) {
    event.target.style.fontSize = '20px';
  }

  let allDays = document.getElementsByClassName('day');
  for(let index = 0; index < allDays.length; index += 1) {
    allDays[index].addEventListener('mouseenter', zoom)
    allDays[index].addEventListener('mouseleave', zoomOut)
  }

  // Exercicio 7
  function tasks(nameTask) {
    let pai = document.getElementsByClassName('my-tasks')[0];
    let task = document.createElement('span');
    pai.appendChild(task);
    task.innerHTML = nameTask;
  }
  tasks('Estudar ');

  // Exercicio 8
function colorTask(cor) {
  let pai = document.getElementsByClassName('my-tasks')[0];
  let task = document.createElement('div');
  pai.appendChild(task);
  task.style.backgroundColor = cor;
  task.className = 'task';
}

colorTask('red');

// Exercicio 9 - last child diff
function tagSwitch(event) {
  if (event.target.className == 'task') {
    event.target.className = 'task selected'
  } else if (event.target.className != 'task') {
    event.target.className = 'task'
  }
}

let task = document.getElementsByClassName('my-tasks')[0].lastChild;
task.addEventListener('click', tagSwitch);

// Exercicio 10 
