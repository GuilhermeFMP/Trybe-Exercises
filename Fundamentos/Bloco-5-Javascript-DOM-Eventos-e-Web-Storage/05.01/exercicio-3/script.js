document.querySelector('#header-container').style.backgroundColor = 'darkturquoise';

let urgente = document.querySelectorAll('.emergency-tasks div h3');

for(let index = 0; index < urgente.length; index += 1){
    urgente[index].style.backgroundColor = 'purple';
}

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';

let notUrgente = document.querySelectorAll('.no-emergency-tasks div h3');

for(let index = 0; index < notUrgente.length; index += 1){
    notUrgente[index].style.backgroundColor = 'black';
}

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';