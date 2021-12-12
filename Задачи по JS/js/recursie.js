"use strict";

// 1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл
// function arrNum(arr){
//   alert(arr[0]);
//   arr.splice(0,1);
//   if(arr.length > 0){
//     arrNum(arr);
//   }
// }
// let arrays = [1,1,21,12,0,228];

// arrNum(arrays);

// 2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

// function digitSum(num){
//   let str = String(num).split('');
//   let sum = 0;
//   for (let i = 0; i < str.length; i++){
//     sum += Number(str[i]);
//   }
//   if(sum > 9){
//     digitSum(sum);
//   }else{
//     alert(sum);
//   }
// }
// digitSum(26);




