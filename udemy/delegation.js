const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));

// console.log(btns[0].classList.add('white', 'another_class'));

// console.log(btns[1].classList.add('white'));
// console.log(btns[0].classList.remove('blue'));


// if (btns[1].classList.contains('white')){
//     console.log('white');
// }

// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.classList.contains ('blue')){
    //     console.log('Hello');
    // }
    // if (event.target && event.target.tagName == 'BUTTON'){
    //     console.log('Hello');
    // }
    if (event.target && event.target.matches('button.red')){
        console.log('Hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', ()=> {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);












