// let disp = document.querySelector('.calc-screen');

// let buttons = Array.from(document.querySelectorAll('.btn'));

// buttons.map(button => {
//   button.addEventListener('click', (e) => {
//     switch(e.target.innerText){
//       case 'ac':
//         disp.innerText = '';
//         break;
//       // case 'стрелка':
//       //   if (disp.innerText){
//       //     disp.innerHTML = disp.innerText.slice(0, -1);
//       //   }
//       //   break;
//       case '=':
//         try{
//           disp.innerText = eval(disp.innerText);
//         } catch {
//           disp.innerText = 'Error!';
//         }
//         break;
//       default:
//         disp.innerText += e.target.innerText;
//     }
//   });
// });

// Дисплей в котором все выводится
// let disp = document.querySelector('.calc-screen');
// // Сохраненная часть выражения для возведения в степень
// let power = ''
// // Вставить символ
// function insert(num) {
//   if (disp.textContent == 0) {
//       disp.textContent = '';
//       disp.textContent += num;
//   } else {
//     disp.textContent += num;
//   }
// }
// // Очистка поля 
// function clean() {
//   disp.textContent = '0';
//   power = '';
// }
// // Посчитать выражение
// function equal() {
//   let exp = disp.textContent;
//   // if(disp.textContent.includes('*')) {
//   //   let tmp = disp.textContent.split('*');
//   //   let num = eval(power);
//   //   let pow = +tmp[1];
//   //   disp.textContent = Math.pow(num, pow);
//   //   power = '';
//   //   return;
//   //   }
//   if (exp){
//     disp.textContent = eval(exp);
    
//   }
//   // power = '';
// }
// //Вычисляем проценты 
// function percents() {
//   disp.textContent = eval(disp.textContent) / 100;
// }
// //Удаление одного символа
// function del() {
//   let exp = disp.textContent;
//   disp.textContent = exp.substring(0, exp.length - 1);
//   if (disp.textContent == 0) {
//     disp.textContent = '0';
//   }
// }

let a = ''; //first number
let b = ''; //second number
let sign = ''; //знак операции
let finish = false;


const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
// const perc = ['%'];
const action = ['-','+','X','/'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll () {
    a = ''; //first number
    b = ''; //second number
    sign = ''; //знак операции
    finish = false;
    out.textContent = 0;

document.querySelector('.ac').addEventListener('click', clearAll);
// document.querySelector('.percent').addEventListener('click', percents);

document.querySelectorAll('.buttons').addEventListener('click', (event) => {
  //нажата не кнопка
  if(!event.target.classList.contains('btn')) return;
  //нажата кнопка clearAll ac
  if(!event.target.classList.contains('ac')) return;

  out.textContent = '';
  //получаю нажатую кнопку
  const key = event.target.textContent;
  console.log(key);

  //если нажата кнопка процента
  // if (perc.includes(key)){
  //   console.log('Кнопка прцоента');
  //   sign += key;
  //   out.textContent = sign;
  //   return;
    // if (b === '' && sign === '%') {
    //   a = key;
    //   out.textContent = a / 100;

    // }
  //}

  //если нажата кнопка 0-9 или .
  if (digit.includes(key)){
    if (b === '' && sign === ''){
      a += key;
      out.textContent = a;
    } else if (a !== '' && b !== '' && finish){
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    console.log(a,b,sign);
    return;
  }


  //если нажата клавиша + - / *
  if (action.includes(key)){
    sign += key;
    out.textContent = sign;
    return;
  }

  //нажата =
  if (key === '=') {
    if(b === '') b = a;
    switch(sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === '0') {
          out.textContent = 'Error!';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;

  }


});












