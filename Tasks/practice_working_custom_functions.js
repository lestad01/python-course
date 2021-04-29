"use strict";

// 1. Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
// Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый 
// символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function usfirst (str){
//   return str[0].toUpperCase() + str.substr(1);
// }
// let s = 'добрый вечер, я диспетчер';
// let arr = [];
// arr = s.split(' ');
// let arr2 = [];
// for(let i = 0; i < arr.length; i++){
//   arr2[i] = usfirst(arr[i]);
// }
// s = '';
// s = arr2.join(' ');
// console.log(s);

// 2. Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function usfirst(str){
//   return str[0].toUpperCase() + str.substr(1);
// }

// let stringg = 'var_text_hello';
// let arr = [];
// arr = stringg.split('_');
// let arr2 = [];
// for (let k = 0; k < arr.length;k++){
//   if(k > 0){
//     arr2[k] = usfirst(arr[k]);
//   }else{
//     arr2[k] = arr[k];
//   }
// }
// stringg = '';
// stringg = arr2.join('');
// console.log(stringg);

// 3. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. 
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// function inArray(value, arr){
//   for (let n = 0; n < arr.length; n++){
//     if(arr[n] == value){
//       return 'Всё верно. Данная фраза присутствует в данном массиве!';
//     }
//   }
//   return 'Нет такой фразы, ты что пьяный?';
// }
// let val = 'Рефрижераторные батареи';
// let mass = ['Рефрижераторные батареи', 'тракс', 'повторял', 'данную', 'фразу', 'каждый раз'];

// console.log(inArray(val,mass));

// 4. Дана строка, например, '123456'. Сделайте из нее '214365'.

let str = '123456';
let arr = [];
arr = str.split('');
console.log(arr);
let newStr = '';

for (let g = 0; g < arr.length - 1; g+=2){
  newStr = arr[g];
  arr[g] = arr[g + 1];
  arr[g + 1] = newStr;
}
str = arr.join('');
console.log(str);





