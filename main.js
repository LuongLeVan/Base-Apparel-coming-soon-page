const button = document.getElementById('btn-click');
const iconError = document.getElementById('error');
const message = document.querySelector('.message');
const inputValue = document.getElementById('value');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

button.addEventListener('click', () => {
    if(!inputValue.value.match(validRegex)){
        message.textContent = 'Please provide a valid email!';
        iconError.classList.remove('hidden');
    }else{
        message.textContent = '';
        iconError.classList.add('hidden');
    }
})
