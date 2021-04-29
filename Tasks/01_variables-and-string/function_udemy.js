// "use strict";

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
//     return num;
// }

// alert(showFirstMessage("Hello there"));
// alert(num);


// function calc (a,b) {
//   return (a + b);
// }
// console.log(calc(4, 5));

// function ret () {
//   let num = 50;
//   return num;
// }

// const anotherNum = ret ();
// console.log(anotherNum);

// function declaration

console.log(calk(2, 5));
console.log(calk(2, 2));
console.log(calk(3, 4));

function calk(a,c) {
  return (a + c);
}
//function expression такие же условия как и у переменной объявили и пишем код по-другому не работает
const logger = function() {
  console.log("hellouer");
};

logger();
//стрелочные функции. Емли функция в одну строчку то можно опускать скобки 
// const calc = (a, b) => a + b;
    const calc = (a, b) => {
      console.log('1');
      return a + b;
    };

