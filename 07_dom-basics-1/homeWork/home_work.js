"use strict";

document.addEventListener('DOMContentLoaded', function() {
  let btn = document.querySelector('.container__button');
  let inputNumber = document.querySelector('.container__input');
  let block = document.querySelector('.cointainer__block');
  let timerCounter ;
  let seconds ;
  
  // first task
   function launchTimer(){
      if (seconds >= 0){
      block.textContent = seconds;
      seconds -= 1;
      }
    };
    function restartTimer() {
      let secNum = inputNumber.value;
      seconds = parseInt(secNum);
      clearInterval(timerCounter);
      timerCounter = setInterval(launchTimer, 1000);
    }
    
    btn.addEventListener('click', restartTimer);

  //second task
  let timeId;
  let clearPrev;
  let field = document.createElement('input');
  let h2 = document. createElement('h2');
  let buten = document.createElement('button');
  buten.textContent = 'Clear Value!';
  document.body.append(field);
  document.body.append(buten);
  document.body.append(h2);
  field.classList.add('input-field');
  buten.classList.add('butn');
  h2.classList.add('heading');
  
  function appropriationContent() {
    h2.textContent = field.value;
  }

  function delayContent () {
    clearPrev = clearTimeout(timeId);
    timeId = setTimeout(appropriationContent, 400);
  }
  field.addEventListener('input', delayContent);
  
  buten.addEventListener('click', function(){
    field.value = '';
    h2.textContent = '';
  });

    });












