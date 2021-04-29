"use strict";
//Метод reverse
// Давайте перевернем массив:
// let arr = ['a', 'b', 'c'];
// arr.reverse();
// console.log(arr);
// Задача. Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// Решение: объединим эти массивы с помощью метода concat:

// var a = ['a', 'b', 'c'];
// var b = [1, 2, 3];

//Вариант 1:
// var c = a.concat(b);
// alert(c); //получится массив ['a', 'b', 'c', 1, 2, 3]

//Вариант 2:
// var c = b.concat(a);
// alert(c); //получится массив [1, 2, 3, 'a', 'b', 'c']

// let arr1 = [1, 2, 3];
// let arr2 =  [4, 5, 6];

// let c = arr1.concat(arr2);
// alert(c);
// let arr =  [1, 2, 3];
// let b = arr.reverse();
// alert(b);
//push, unshift
// let arr = [1,2,3];
// let num = arr.push('4','5','6');
// let num = arr.unshift('4','5','6');
// console.log(arr);

//shift,pop
// let arr = ['js', 'css', 'jq'];
// let num = arr.shift();
// alert(num);
// let arr =['js', 'css', 'jq'];
// let num = arr.pop();
// alert(num);

//splice
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,2);
// alert(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,5,'2','3','4');
// alert(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0,'a', 'b', 'c');
// alert(arr);

// let arr = [1, 2, 3, 4, 5];
// // arr.splice(1,0,'a','b');
// arr.splice(6,3,'c', 5, 'e');
// console.log(arr);

//sort
// let arr =  [3, 4, 1, 2, 7];
// alert(arr.sort());

// Работа с Object.keys
// let obj = {js:'test', jq: 'hello', css: 'world'};
// alert(Object.keys(obj));

//Отработка стандартных решений
// function Upper(string){
//    let UpperNum = string.substr(0,1).toUpperCase() + string.substring(1);
//    alert(UpperNum);
// }
// Upper('my love - is javascript');

// let str = 'my love - is javascript';
// str = str.split('');
// str[0] = str[0].toUpperCase();
// let resul = str.join('');
// alert(resul);

// let str = '1,2,3,4,5,6';
// let arr = str.split(',').reverse().join(',');
// alert(arr);

// Проверьте, что строка начинается на http://
// let str = 'http://phphtml';
// if (str.substring(0,7) == 'http://' ){
//   alert('Правда');
// }else{
//   alert('Ложь');
// }
// Проверьте, что строка заканчивается на .html
// let str = 'index.html';
// if (str.substr(-5) == '.html'){
//   alert('Pravda');
// }else{
//   alert('Nepravda');
// }


//Tasks

// Давайте заполним массив десятью иксами 'x'. Для этого воспользуемся методом push:

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr.push('x');
// }

// console.log(arr);


// Давайте теперь заполним массив числами от 1 до 10:

// var arr = [];
// for (var i = 1; i <= 10; i++) {
// 	arr.push(i);
// }

// console.log(arr); //выведет [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Можно не использовать push, а указать ключи напрямую:

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }

// console.log(arr); //выведет ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = i + 1;
// }

// console.log(arr);

// Переворот массива
// Давайте из массива ['a', 'b', 'c', 'd', 'e'] сделаем ['e', 'd', 'c', 'b', 'a'].
//Для этого переберем исходный массив с конца и запишем его элементы в новый массив - они будут идти в обратном порядке:

// var arr = ['a', 'b', 'c', 'd', 'e'];
// var result = [];

// for (var i = arr.length - 1; i >= 0; i--) {
// 	result.push(arr[i]);
// }

// console.log(result); //выведет ['e', 'd', 'c', 'b', 'a']


// Переворот объекта
// Давайте поменяем ключи и значения в объекте, например из {a: 1, b: 2, c: 3, d: 4, e: 5} сделаем {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}.

// Для этого переберем циклом for-in исходный объект и создадим при этом новый объект result.
//Ключами нового объекта сделаем элементы старого (это obj[key]), а значениями нового объекта - ключи старого (это key):

// var obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// var result = {};

// for (var key in obj) {
// 	result[obj[key]] = key;
// }

// console.log(result); //выведет {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}


// Подсчет количества элементов
// Пусть дан массив ['a', 'b', 'c', 'a', 'a', 'b']. Давайте подсчитаем количество одинаковых элементов в этом массиве и сделаем результат в виде объекта {a: 3, b: 2, c: 1}.

// Для решения сделаем объект count с начальным значением {a: 0, b: 0, c: 0}. Будем перебирать массив циклом и увеличивать соответствующее значение в объекте count. К примеру: если текущий элемент массива - это 'a', то увеличим count['a'] на единицу - вот так: count['a']++.

// Только вместо 'a' следует подставлять текущий элемент массива, вот так: count[arr[i]]++. Давайте напишем окончательный код:

// var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// var count = {a: 0, b: 0, c: 0};

// for (var i = 0; i < arr.length; i++) {
// 	count[arr[i]]++;
// }

// console.log(count); //выведет {a: 3, b: 2, c: 1}
// Пойдем дальше: то, что объекта count имеет изначальное значение {a: 0, b: 0, c: 0} - не очень удобно, ведь мы обычно не знаем, какие элементы есть в массиве.

// Пусть объект count формируется автоматически таким образом: если такого элемента в count нет, то ему следует присвоить значение 1, а если есть - просто увеличить значение на единицу:

// var arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// var count = {};

// for (var i = 0; i < arr.length; i++) {
// 	if (count[arr[i]] === undefined) {
// 		count[arr[i]] = 1;
// 	} else {
// 		count[arr[i]]++;
// 	}
// }

// console.log(count); //выведет {a: 3, b: 2, c: 1}

// Перебор многомерных массивов
// Пусть дан следующий двухмерный массив:

// var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// Давайте выведем все его элементы на экран. Для этого нам необходимо запустить два вложенных друг в друга цикла:

// var arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (var i = 0; i < arr.length; i++) {
// 	for (var j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

//№1
// var str = '';
// var arr = [];
// for (let i = 0; i < 10; i++){
//   str += 'x';
//   arr[i] = str;
//   document.write(arr + '<br>');
// }
// console.log(arr);

//№2

// let arr = [];
// for (let i = 0; i < 10; i++){
//   let str = '';
//     for (let j = 0; j < i; j++){
//       str += i;
//       arr[i - 1] = str;
//       document.write(arr + '<br>');
//     }
// }
// alert(arr);

// let arr = [];
// let str = '';
// for (let i = 0; i < 5; i++){
//   str += 'xa'+ 'на' ;
//   arr[i] = str;
//   document.write(arr + '<br>');
// }
// console.log(arr);

//№3

// function arrayFill(num, length){
//   let arr = [];
//   let str = '';
//   for (let i = 0; i < length; i++){
//     // str += num;
//     // arr = str;
//     arr.push(num);
//   }
//   return arr;
// }

// alert(arrayFill('ку-ку', 5));

//№4 
//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
// let arr = [1,2,3,2,7,8];
// let i = 0;
// let s = 0;
// while (s < 11){
//   s+= arr[i];
//   i++;
// }
// alert(i);

//Переворот массива
//№ 5
//Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
// let arr = [7,6,5,4,3,2,1];
// let newArr = [];
// for (let i = arr.length-1; i >= 0; i--){
//   newArr.push(arr[i]);
// }
// alert(newArr);

//Многомерные массивы
// //№ 6
// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// let arr = [[1, 2, 3], [4, 5], [6]];
// let summ = 0;
// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     summ += arr[i][j];
//   }
// }
// console.log(summ);

// №7 
// Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. 
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным

// let arr = [[[1, 9, 2], [3, 4]], [[5, 6, 2], [7, 8, 4]]];
// let summ = 0;
// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     for (let k = 0; k < arr[i][j].length; k++){
//       summ += arr[i][j][k];
//     }
//   }
// }
// alert(summ);

