 "use strict";
// Задача #1 Поиск и замена
//находит все смовыпадения и заменяет их
// let str = 'aaa@bbb@ccc';
// console.log(str.replace(/@/g, '!'));
//находит только первое совпадение
// let str = 'aaa@bbb@ccc';
// console.log(str.replace('@', '!'));

// Задача #2 Методы substr, substring, slice
// let str = 'aaa bbb ccc';
// alert(str.substr(4, 3)); //substr(откуда отрезать, сколько отрезать)
// alert(str.substring(4, 7)); //substring (откуда отрезать, до куда отрезать)
// alert(str.slice(4,7)); //slice(откуда отрезать, докуда отрезать)
//Обратите внимание на то, что в методах substring и slice второй параметр должен быть на 1 больше того символа, который мы хотим забрать
//(то есть, если указать число 7 - то отрезание произойдет до 6 символа включительно).

//Преобразование формата даты
// var str = '2025-12-31';
// var arr = str.split('-');
// var newStr = arr[2] + '/' + arr[1] + '/'+arr[0];
// console.log(newStr);

//Работа с регистром символов
// let str = 'js';
// alert(str.toUpperCase());
// let str = 'JS';
// alert(str.toLowerCase());

//Работа с length, substr, substring, slice. Работа с indexOf
// let str = 'я учу javascript!';
// alert(str.length);

// let str = 'я учу javascript!';
// alert(str.substr(2, 3));
// alert(str.substring(2, 5));
// alert(str.slice(2,5));

// let str = 'я учу javascript учу!';
// alert(str.indexOf( 'учу',5 ));

// let str = 'я учу javascript учуdwqdqwdwqd!';
// let n = 25;
// let result ='';
// if (str.length > n){
//   result = str.substr(0, n) + '...';
// }else{
//   result = str;
// }
// console.log(result);

//Работа с replace
// let str = 'я-учу-javascript!';
// alert(str.replace(/-/g, '!'));
//Split
// let str =  'я учу javascript!';
// let a = str.split(' ');
// for (let i = 0; i < a.length; i++){
//   document.write(a[i] + '<br>');
// }
// let date =  '2025-12-31';
// let a = date.split('-');
// let newDate = a[2] + '.' + a[1] + '.' + a[0];
// alert(newDate);
// join
// let arr = ['я', 'учу', 'javascript', '!'];
// let string = arr.join('+');
// console.log(string);
// Преобразуйте первую букву строки в верхний регистр.
// let s = 'я учу javascript!';
// let BigLitter = s.substr(0, 1).toUpperCase() + s.substring(1);
// alert(BigLitter);
// Преобразуйте первую букву каждого слова строки в верхний регистр
// let s = 'я учу javascript я также учу react';
// let a = s.split(' ');
// for (let i = 0; i < a.length;i++){
//   a[i] = a[i].slice(0,1).toUpperCase() + a[i].slice(1);
//   document.write(a[i] + '<br>');
// }
// alert(a.join('-'));
// Преобразуйте строку 'var_test_text' в 'varTestText'.
//Скрипт, конечно же, должен работать с любыми аналогичными строками.
// let str = 'var_test_text';
// let a = str.split('_');
// for (let i = 1; i < a.length;i++){
//   a[i] = a[i].substr(0,1).toUpperCase() + a[i].substring(1);
// }
// alert(a.join(''));
