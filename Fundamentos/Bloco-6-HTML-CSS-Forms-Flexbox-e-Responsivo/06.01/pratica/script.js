const button = document.querySelector('#enviar');

function stopIt(event) {
    event.preventDefault()
}

button.addEventListener('click', stopIt)