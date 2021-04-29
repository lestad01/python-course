"use strict";

// let arr = ['a', 'b', 'c'];
// alert(arr);

// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + arr[1] + ',' + arr[2] + arr[3] );

// let arr = [2, 5, 3, 9];
// let result = (arr[0] * arr[1]) + (arr[2] * arr[3]);
// alert(result);

// let obj = {a:1, b: 2, c: 3};
// alert(obj['c']);
// alert(obj.c);

// let obj = {Коля: '1000', Вася: '500', Петя: '200'};
// alert(obj["Коля"]);
// alert(obj["Петя"]);

// let week = {понедельник: 'первый', вторник: 'второй', среда: 'третий', четверг: 'четвёртый', пятница: 'пятый', суббота: 'шестой', воскресенье: 'седьмой'};
// alert(week['воскресенье']);

// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вск'};
// let day = (obj[2]);
// alert(day);

// let arr = [[1, 2, 3], [4, 5, 6], [7,8,9]];
// alert(arr[1][0]);

// let arr = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
// alert(arr['js'][0]);

// let arr = {
//         'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//         'eng': ['mon', 'tues', 'wedn', 'thus', 'frid', 'sat', 'sund'],
//       };
// alert(arr['ru'][0]);
// alert(arr['eng'][2]);
// alert(arr['eng']);

// let obj = {
//   'ru':{'1':'Понедельник','2':'Вторник','3':'Среда','4':'Четверг','5':'Пятница','6':'Суббота','7':'Воскресенье'},
//   'en':{'1':'Monday','2': 'Tuesday','3': 'Wednesday','4': 'Thursdey','5': 'Friday','6': 'Saturday','7': 'Sunday'}
// };
// let lang = 'en';
// let day = '6';
// alert(obj[lang][day]);
// alert(obj['ru']['6']);

// let arr =  [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
// alert(arr[1][0]);

let q = ['1', '2', '3', '4', '5', '6', '7', '8'];

function metodShiftPop(arr){
let res = [];
while (arr.length > 0){
   let firstNum = arr.shift();
   let lastNum = arr.pop();
   let str = firstNum + lastNum;

   res.push(str);
  }
  res = res.join('-');
  return res;
}

console.log(metodShiftPop (q));
