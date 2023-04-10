const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);


const inputValue = document.getElementById('value-real');
const selectecCurrency = document.getElementById('currency');
const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault();


    if(!inputValue.value || inputValue.value < 0) {
        alert('informe um valor valido');
        return;
    } else if(!selectecCurrency.value){
        alert('Escolha uma moeda!');
        return;
    }
};