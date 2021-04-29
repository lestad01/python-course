// "use strict";

// var i = 1;
// while (i <= 50) {
// 	document.write(i + '<br>');
// 	i++;
// }

// for (var i = 1; i <= 50; i++) {
// 	document.write(i + '<br>');
// }
// let aray = [1,2,3,4,5];
// for (let i = 0; i < aray.length; i++) {
//   document.write(aray[i] + '<br>');
// }

// let arr = [2,1,1,5];
// let resul = 1;
// for (let i = 0; i < arr.length; i++) {
//     // resul = resul * arr[i];
//     resul *= arr[i];
// }
// alert(resul);

// let obj = {
// 	'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };

// for (let key in obj) {
// 	alert(key);
// }
// var obj = {
// 	'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };

// for (var key in obj) {
// 	alert(obj[key]);
// }

// var obj = {
// 	'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };

// for (var key in obj) {
// 	alert(key + ' - это ' + obj[key] + '.');
// }

// let i = 11;
// while (i <= 100){
//   document.write(i + '<br>');
//   i++;
// }
// for (;i <= 33; i++ ){
//   document.write(i + '<br>');
// }
// for (let i = 0; i <= 100; i++){
//   if(i % 2 == 0) {
//     document.write(i + '<br>');
//   }
// }
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   (sum += i);
// }
// alert(sum);

// let arr = [3, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++){
//   alert(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i <= arr.length; i++){
//   result += i;
// }
// alert(result);

// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'};
// for (let key in obj){
//   alert(`${key} это ${obj[key]}`);
//   // alert (key + obj[key]);
// }

// let obj = {Коля: '200', Вася: '230', Петя: '470'};
// for (let key in obj){
//   alert(`${key} his salary is ${obj[key]}`);
// }

// let obj = [2,4,6,7,8,9,10];
// for (let i = 0; i < obj.length; i++){
//   if (obj[i] > 3 && obj[i] < 10){
//     document.write(obj[i] + '<br>');
//   }
// }

// let sum = 0;
// let arr = [1, -5, 3, 9, -3, 11, -7];
// for (let key in arr){
//   if (arr[key] > 0) {
//     sum += arr[key];
//   }
// }
// alert(sum);

// let arr = [1, 2, 4, 9, 13, 10];
// for (let keys = 0; keys < arr.length; keys++ ){
//   if (arr[keys] == 4) {
//     alert('Присутсвует данный элемент');
//     break;
//   }else{
//     alert('Нет');
//   }
// }

// let arr = [10, 20, 30, 50, 235, 3000]
// for (let i = 0; i < arr.length; i++) {
//        let th = arr[i]/1000;
//        let hn = arr[i]/100;
//        let dec = arr[i]/10;
//         if(th >= 1 && (th < 6 && th > 4 || th < 3 && th > 0)){
//                 console.log(arr[i]);
//         }else if(hn >= 1 && (hn < 6 && hn > 4 || hn < 3 && hn > 0)){
//                 console.log(arr[i]);
//         }else if(dec >= 1 && (dec < 6 && dec > 4 || dec < 3 && dec > 0)){
//                 console.log(arr[i]);
//   }
// }

// let str = '';
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < 10; i++){
//   str = str + '-' + i;
// }
// str += '-';
// console.log(str);

// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
// 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < arr.length; i++) {
//     if (i == 5 || i == 6) {
//     // document.write('');
//     // document.write('');
//     document.write(arr[i]);
//     // document.write('');
//     // document.write('');
// } else {
//     document.write('');
//     // document.write(arr[i]);
//     // document.write('');
// }
// }
