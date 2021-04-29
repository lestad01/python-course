"use strict";

// function onClick() {
//   console.log('Нажали на кнопку');
// }
// let button = document.querySelector('.btn');
// button.addEventListener('click', onClick);

document.addEventListener('DOMContentLoaded', function() {
  let countDisplay = document.querySelector('.count-display');
  let incremenButton = document.querySelector('.increment-button');

  function incrementCount () {
    let currentCount = parseInt(countDisplay.textContent);
    countDisplay.textContent = currentCount + 1;
  }

  incremenButton.addEventListener('click', incrementCount);



  let colorInput = document.querySelector('.color-input');
  let colorBlock = document.querySelector('.color-black');
  let clearButton = document.querySelector('.clear-color-button');

  function painBlock() {
    colorBlock.style.backgroundColor = colorInput.value;
  }
  colorInput.addEventListener('input', painBlock);

  painBlock();

  clearButton.addEventListener('click', function(){
    colorBlock.style.removeProperty('background-color');
    colorInput.value = '';
  });

});
//IIFE - immedietely invoked function expression (объявление и немедленный вызов функции)