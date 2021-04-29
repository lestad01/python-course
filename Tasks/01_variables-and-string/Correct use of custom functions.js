"use strict";

// Задача: пусть дан массив с числами, давайте запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.
// Я начну решение с разработки вспомогательной функции getDigits (digit - цифра), которая параметром будет принимать число, а возвращать массив цифр. Вот эта функция:
// function getDigits(num) {
// 	var str = String(num);
// 	return str.split('');
// }
// Обратите внимание на String(num) - переданное число необходимо преобразовать в строку с помощью String, иначе к нему нельзя будет применить метод split.
// Этот код можно переписать короче в одну строчку:

// function getDigits(num) {
// 	return String(num).split('');
// }
// Давайте потестируем нашу функцию на каком-нибудь числе:

// console.log(getDigits(123)); //выведет ['1', '2', '3']
//Обратите внимание на то, что функция вернула массив строк ['1', '2', '3'], а не массив чисел [1, 2, 3] - это результат работы split. 
//Давайте здесь с этим ничего не будем делать, а просто учтем в дальнейшем.

// Следующая функция, которую я хотел бы написать - это функция arraySum, параметром принимающая массив и возвращающая сумму элементов этого массива. Пусть эта функция работает и с массивом ['1', '2', '3'], и с массивом [1, 2, 3]. Это достигается с помощью функции Number, в которую мы оборачиваем элементы нашего массива:

// function arraySum(arr) {
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum += Number(arr[i]);
// 	}

// 	return sum;
// }
// Давайте потестируем комбинацию наших двух функций - найдем сумму цифр заданного числа:

// var sum = arraySum(getDigits(123));
// alert(sum); //выведет 6
// Следующая функция, которую мне хотелось бы иметь - это функция inRange, которая параметром принимает число и возвращает true, если сумма цифр этого числа от 1 до 9, и false - если это не так. Вот эта функция:

// function inRange(num) {
// 	var sum = arraySum(getDigits(num)); //используем вспомогательные функции

// 	if (sum >= 1 && sum <= 9) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Можно переписать и короче:

// function inRange(num) {
// 	var sum = arraySum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }
// Давайте теперь решим нашу исходную задачу. Напомню ее: дан массив с числами, запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9. Для этого возьмем массив с числами, переберем его циклом и в цикле с помощью нашей функции inRange будем проверять, подходит ли нам этот элемент массива. Если подходит - забираем его себе:

// var arr = [12, 19, 28, 13, 14, 345];
// var result = [];

// for (var i = 0; i < 10; i++) {
// 	if (inRange(arr[i])) { //если подходит - берем
// 		result.push(arr[i]);
// 	}
// }
// console.log(result);
// Окончательное решение будет выглядеть так:

// var arr = [12, 19, 28, 13, 14, 345];
// var result = [];

// for (var i = 0; i < 10; i++) {
// 	if (inRange(arr[i])) {
// 		result.push(arr[i]);
// 	}
// }
// console.log(result);

// function inRange(num) {
// 	var sum = arraySum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }

// function getDigits(num) {
// 	return String(num).split('');
// }

// function arraySum(arr) {
// 	var sum = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		sum += Number(arr[i]);
// 	}

// 	return sum;
// }


//№1
//Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
//Если это так - пусть функция возвращает true, если не так - false. 

// function isNumberInRange (num){
//   if (0 < num && num < 10 ){
//   }
//   return false;
// }
// console.log(isNumberInRange(0));

// №2
// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.


// function isNumberInRange(n) {
//   return n > 0 && n < 10;
//   }
// let arr = [0, 2, 1, 15, 5];
// let newArr = [];
//   for (let i = 0; i < arr.length; i++){
//     if (isNumberInRange(arr[i])){
//       newArr.push(arr[i]);
//     }
//   }
// console.log(newArr);

//№3
// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(q){
//   let str = String(q);
//   let s = 0;
//   for (let i = 0; i < str.length; i ++ ){
//     s += Number(str[i]);
//   }
//   return s;
// }
// console.log(getDigitsSum(12321));
// console.log(getDigitsSum(228));

//№4
// Найдите все года от 1 до 2021, сумма цифр которых равна 13. 
// Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function getDigitsSum(q){
//   let str = String(q);
//   let s = 0;
//   for (let i = 0; i < str.length; i ++ ){
//     s += Number(str[i]);
//   }
//   return s;
// }

// let year = [];
// for (let i = 1; i < 2022; i++){
//   if (getDigitsSum(i) === 13){
//     year.push(i);
//     document.write( year + '<br>');
//   }
// }
// console.log(year);
//№5
//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
//Если четное - пусть функция возвращает true, если нечетное - false.
// function isEven(k){
//   let str = Number(k);
//   return str % 2 == 0;
// } 
// console.log(isEven(-4));

//№6
//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
// 
// function isEven(k){
//   let str = Number(k);
//   return str % 2 == 0;
// } 

// let arr = [-1, 2, 22, 13, 31, 11, 10];
// let result = [];

// for (let i =0; i < arr.length; i++){
//   if (isEven(arr[i])){
//     result.push(arr[i]);
//   }
// }
// alert(result);
//№ 7
// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

// function getDivisors(divider){
//   let newArr = [1];
//     if (divider > 1){
//       let b = [divider];
//       let i = 2;
//       while (i*i <= divider){
//         if (divider % i == 0){
//           newArr.push(i);
//           b.push(divider/i);
//         }
//       i++;
//     }
//   i = newArr.length-1;
//     if (newArr[i] == b[i]){
//       b.pop();
//       i--;
//     }
//       for (i; i > -1; i--) newArr.push(b[i]);
//   }
//       return newArr;
// }
// let newNums = 228;
// // for (var i=1; i < 101; i++);
// console.log(getDivisors(newNums));



