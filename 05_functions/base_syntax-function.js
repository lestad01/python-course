"use strict";
// 0 - воскресенье 1 - понедельник....
function printWeekDay () {
let daIndex = new Date().getDay();
let days = [
  'воскресенье',
  'понедельник',
  'вторник',
  'среда',
  'четверг',
  'пятница',
  'суббота'
];
console.log(`Сегодня ${days[daIndex]}`);
}
printWeekDay();




// объявление функции с названием functionName
function functionName () {
  // тело функции
  console.log('функция вызвана');
}

// вызов функции
functionName();
const functionVariable = function() {
  console.log('тело вызвано!');
}
functionVariable();






