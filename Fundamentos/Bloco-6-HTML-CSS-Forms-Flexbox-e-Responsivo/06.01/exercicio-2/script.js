// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function nothing(event) {
    event.preventDefault();
}

function nothing2(event) {
    if (INPUT_TEXT.value !== 'a' && INPUT_TEXT.value !== null) {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', nothing);
INPUT_CHECKBOX.addEventListener('click', nothing);
INPUT_TEXT.addEventListener('keypress', nothing2);