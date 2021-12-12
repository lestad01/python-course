"use strict";


// let num = 10;
// if (num == 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// let min = 10;
// if (min >= 0 && min <= 14) {
// 	console.log('В первую четверть.');
// }
// if (min >= 15 && min <= 30) {
// 	console.log('Во вторую четверть.');
// }
// if (min >= 31 && min <= 45) {
// 	console.log('В третью четверть.');
// }
// if (min >= 46 && min <= 59){
// console.log('В четвертую четверть.');
// }


// let lang = 'ru';
// let arr;
// if (lang == 'ru') {
// 	arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
// 	 arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// console.log(arr);


// let lang = 'en';
// let arr;
// switch (lang) {
// 	case 'ru':
// 	 arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// 	break;
// 	case 'en':
// 		arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// 	break;
// }
// console.log(arr);

// let lang = 'ru';
// let arr = {
// 	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
// 	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// console.log(arr[lang]);
// let a = -2;
// if (a === undefined) { //если переменная a не определена
// 	console.log('Введите a!');
// } else { //если переменная a НЕ пуста
// 	if (a > 0) { //спрашиваем, больше ли нуля переменная a
// 		console.log('Больше нуля!'); 
// 	} else {
// 		console.log('Меньше нуля!'); 
// 	}
// }

// switch (переменная) {
// 	case 'значение1':
//  		//здесь код, который выполнится в случае, если переменная имеет значение1;
// 	break;
// 	case 'значение2':
// 		//здесь код, который выполнится в случае, если переменная имеет значение2;
// 	break;
// 	case 'значение3':
// 		//здесь код, который выполнится в случае, если переменная имеет значение3;
// 	break;
// 	default:
// 		//этот код выполнится в случае, если переменная не совпала ни с одним значением;
// 	break;
// }

// let a = 0;
// if (a == 0){
//   console.log(true);
// } else{
//   console.log(false);
// }

// let a = 2;

// if (a > 0){
//   console.log(true);
// } else {
//   console.log(false);
// }


// let a = 1;
// if (a >= 0){
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = 0;
// if(a != 0){
//   console.log(true);
// } else {
//   console.log(false);
// }

// let a = '1';
// if (a === 1){
//   console.log(true);
// } else {
//   console.log(false);
// }

// let test = false;
// if(test == true) console.log('is good'); console.log('is bad');
// if (test == true){
//   console.log('Is good');
// } else {
//   console.log('Is bad');
// }

// let a = 7;
// if (a > 0 && a < 5) {
//   console.log('верно');
//  } else {
//    console.log('неверно');
//  }

// if(a == 0 || a == 2){
//   a += 7; 
//   console.log(a);
// } else {
//   a /= 10;
//   console.log(a);
// }

// let a = 2;
// let b = 5;
// if (a <= 1 && b >= 3){
//   console.log(a + b);
// }  else {
//   console.log(b - a);
// }

// let a = 5;
// let b = 8;
// if (a > 2 && a < 11 || b >= 6 && b < 14 ){
//   console.log('Верно');
// } else {
//   console.log('Неверно');
// }



// let num = 3;
// let result;
// switch (num) {
// 	case 1:
// 	 result = 'winter';
// 	break;
// 	case 2:
// 		result = 'spring';
// 	break;
//   case 3:
// 		result = 'summer';
// 	break;
//   case 4:
// 		result = 'autumn';
// 	break;
// }
// console.log(result);

// let day = 34;
// if (day <= 10){
//   console.log('День входит в первую декада месяца');
// } else if (day > 10 && day <= 20){
//   console.log('День входит во вторую декаду месяца');
// } else if (day > 30 && day <= 31){
//   console.log('День входит в третью декаду месяца');
// } else {
//   console.log('Такого дня в месяце не существует');
// }

// let month = 13;
// if (month <= 3){
//   console.log('Данный месяц попадает в пору зимы');
// } else if (month > 3 && month <= 6 ){
//   console.log('Данный месяц попадает в пору весны');
// } else if(month > 6 && month <= 9){
//   console.log('ДАнный месяц попадает в пору лета');
// } else if (month > 9 && month <= 12){
//   console.log('Данный месяц попадет в пору осени');
// } else {
//   console.log('В году 12 месяцев. Введите число от 1 до 12');
// }

// let str = 'bcde';
// if (str[0] === 'a'){
//   console.log('Yes');
// }else {
//   console.log('No,brother');
// }

// let strNum = '2345';
// if (strNum[0] === '1' || strNum[0] === '2' || strNum[0] === '3'){
//   console.log('Yes, it is!');
// } else {
//   console.log('No, it is bad!');
// }

// let str = '523';
// let result = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(result);


// let str = '212122';
// if ( Number(str[0]) + Number(str[1]) + Number(str[2]) == Number(str[3]) + Number(str[4]) + Number(str[5])){
//   console.log('Суммы совпадают');
// } else {
//   console.log('Присутсвует расхождение сумм');
// }


























