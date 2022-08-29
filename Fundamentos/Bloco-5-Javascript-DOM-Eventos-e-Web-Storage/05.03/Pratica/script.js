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

  