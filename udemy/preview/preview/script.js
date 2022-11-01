'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button')


// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);


btn.addEventListener('click', ()=> {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
})

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.fontSize);


// console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

//от текущей позиции на странице к положению указанным аргументом 400 
window.scrollBy(0, 400);
//относительно всей страницы и перемещается к 400 .
window.scrollTo(0, 400);


