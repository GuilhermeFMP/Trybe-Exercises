const button = document.querySelector('#enviar');
const names = document.getElementById('name');
const email = document.getElementById('email');
const textarea = document.getElementById('anwser');
/* 
function stopIt(event) {
    event.preventDefault()
}

button.addEventListener('click', stopIt) */
function required(event) {
    if (names) {
        window.alert('Dados Inválidos');
    }
    window.alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip');
}

button.addEventListener('click', required)