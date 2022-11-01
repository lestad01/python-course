'use strict';
//старый метод использования AJAX
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => { 
    //change похожее событие с input
    const request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', ()=> {
    //     if (request.readyState === 4 && request.status === 200) {
    //         console.log(request.response);
    //         const data = JSON.parse(request.response);
    //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    //     } else {
    //         inputUsd.value = "Somethings wrong";
    //     }
    // });

    //Свойства:
    //status
    //statusText
    //response
    //readyState

    //Состояние
    //onreadystatechange говорит о текущем статусе нашего запроса

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

});