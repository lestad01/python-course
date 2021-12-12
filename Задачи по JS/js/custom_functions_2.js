
// дан массив с числами, запишем в новый массив только те элементы, сумма цифр 
// в которых от 1 до 9. Для этого возьмем массив с числами, переберем его циклом 
// и в цикле с помощью нашей функции inRange будем проверять, подходит ли нам этот 
// элемент массива. Если подходит - забираем его себе:

// let arr = [11,21,1,13,51,20,7,311];
// let result = [];

// for (let i = 0; i < 10; i++){
//   if (inRange(arr[i])){
//     result.push(arr[i]);
//   }
// }
// console.log(result);


// function getDigits(num){
//   return String(num).split('');
// }

// function arraySum(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++){
//     sum += Number(arr[i]);
//   }
//   return sum;
// }

// function inRange(num){
//   let sum = arraySum(getDigits(num));

//   if (sum >= 1 && sum <= 3){
//     return true;
//   } else {
//     return false;
//   }
// //return sum >= && sum <= 9;
// }

//дан массив с числами, найдем сумму всех цифр из этих чисел.
// let sum = 0;
// for (let i = 0; i < 10; i ++){
//   sum += arraySum(getDigits(arr[i]));
// }
// console.log(sum);


// let arr = [1, 2, 3, -1, -2, -3];

// function isPositive (num){
//   if (num >= 0){
//     return true;
//   } else {
//     return false;
//   }
// }

// let newArr = [];
// for (let i = 0; i <= arr.length; i++){
//   if (isPositive(arr[i])){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// function isNumberInRange(num){
//   return num > 0 && num < 10;
// }

// let arr = [1, 2, 3, -1, -2, -3, 1]; 
// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//   if (isNumberInRange(arr[i])){
//     newArr.push(arr[i]);
//   }
  
// }
// console.log(newArr);


// function getDigitsSum(numb){
//   let str = String(numb);
//   let res = 0;
//   for (let i = 0; i < str.length; i++){
//     res += Number(str[i]);
//   }
//   return res;
// }

// let res = [];
// for (let i = 1; i <= 121; i++){
//   if (getDigitsSum(i) == 13){
//     res.push(i);
//   }
// }
// console.log(res);

//Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
//Если четное - пусть функция возвращает true, если нечетное - false.

//Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. 
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

// let arr = [1,2,1,12,4,2,7];

// let newArr = [];

// function isEven (num){
//   if (num % 2 == 0){
//     return true;
//   } else {
//     return false;
//   }
// }
// for (let i = 0; i < arr.length; i++){
//   if (isEven(arr[i])){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);























