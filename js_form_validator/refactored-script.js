

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let mail = document.querySelector('#email');
let password = document.querySelector('#password');

//выводим уведомление об ошибке инпута
function showError(input,message){
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelectorAll('form-control__text');
    small.innerHTML = message;
}

//вывод правильной формы
function successForm(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

//проверка майла на валидность
function emailCheck(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        successForm(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

//проверка обязательных полей
function requiredCheck(inputArr) {
    inputArr.forEach(function (input) {
       if(input.value.trim() === ''){
           showError(input, `${getFieldName(input)} is required`);
       } else {
           successForm(input);
       }
    });
}

//проверка на расстояние инпута
function lengthCheck(input, min, max) {
    if(input.value.length < min) {
        showError(
            input, `${getFieldName(input)} must be at least ${min} characters`
        );
    } else if (input.value.length > max){
        showError(
            input, `${getFieldName(input)} must be at least ${max} characters`
        );
    } else {
        successForm(input);
    }
}

//получение имя поля
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
   e.preventDefault();
   requiredCheck([username,email,password]); 
   lengthCheck(username, 4, 15);
   lengthCheck(password,5, 20);
   emailCheck(email);
});
