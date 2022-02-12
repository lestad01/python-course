
const btn = document.querySelector('.btn');
let timerId;
// let i = 1;

function myAnimation () {
    const elem = document.querySelector('.box');
    let position = 0;


    const id = setInterval(frame, 40);
    function frame () {
        if (position == 300){
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.right = position + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);




// function loger () {
//     if (i === 2){
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

//если у нас объёмная функция  которая будет выполнять код около 5 секунд (как пример), 
//то setInterval не будет ждать функцию , а будет выполнять свою функцию дальше

//рекурсивный метод вызова setTimeout
// let id = setTimeout(function log() {
//     console.log('quququ');
//     id = setTimeout(log, 500);
// }, 500);

























