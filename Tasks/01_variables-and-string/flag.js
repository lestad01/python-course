"use strict";

//Флаг - это специальная переменная, которое может принимать только два значения: true и false.
// С помощью флагов можно решать задачи, проверяющие отсутствие чего-либо: к примеру, можно проверить,
// что в массиве нет элемента с определенным значением. Давайте приступим.

// var arr = ['a', 'b', 'c', 'd', 'с'];
// var flag = false;

// for (var i = 0; i < arr.length; i++) {
// 	if (arr[i] == 'c') {
// 		flag = true;
// 		break;
// 	}
// }

// if (flag === true) {
// 	alert('Есть');
// } else {
// 	alert('Нет');
// }

//Флаги в функции
//Давайте реализуем функцию hasElem. В этом случае переменная flag и команда break нам не понадобится - вместо них все сделает команда return.
// Как это будет: внутри функции запускаем наш цикл с ифом и, если мы попали в иф - делаем return true, тем самым выходя из цикла и из функции.
// А если цикл прокрутился, но выхода из функции не случилось - после цикла делаем return false:
// function hasElem(arr) {
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i] == 'c') {
// 			return true;
// 		}
// 	}

// 	return false; //элемент 'c' не найден
// }
// var arr = ['a', 'b','с','d','с'];
// alert(hasElem(arr));

// function check (arr){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == 5){
//       return 'Число найдено';
//     }
//   }
//   return 'Число не найдено';
// }

// let arr = [10,3,1,6,2,16];
// alert(check(arr));

// let num = 28;
// let flag = false;
// for(let i = 2; i < Math.floor(Math.sqrt(num))+1;i++){
//   if(num % i == 0){
//     flag = true;
//   }
// }
// alert(flag);

// Дан массив с числами. Проверьте, есть ли в нем
//два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = [1,2,2,4,5,9,101,101];
let flag = false;
for (let i = 1; i < arr.length;i++){
  if (arr[i] == arr[i - 1]){
    flag = true;
    alert('yes');
  }else{
    alert('No');
  }
}
// if(flag == true){
//   alert('Yes');
// }else{
//   alert('No');
// }

