// Учитывая массив целых чисел nums и целое число target, верните индексы двух чисел так, чтобы они в сумме равнялисьtarget .
// Вы можете предположить, что каждый вход будет иметь ровно одно решение , и вы не можете использовать один и тот же элемент дважды.
// Вы можете вернуть ответ в любом порядке.

// let twoSum = function(nums, target) {
//   let obj = {};
//   for (let i = 0; i < nums.length; i++){
//     if(obj[nums[i]] >= 0) {
//         return [obj[nums[i]], i];
//     }
//     obj[target - nums[i]] = i;
//   }
// };
// let arr = [1,2,2,1];
// let num = 3;
// console.log(twoSum(arr,num));

// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
// function nums(num1, num2){
//   if (num1 == num2){
//     return true;
//   }
//   return false;
// }
// console.log(nums(2,4));

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
// function num10(num1, num2){
//   if(num1 + num2 > 10){
//     return true;
//   }
//   return false;
// }
// console.log(num10(6, 5));

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// function check(num){
//   if (num > 0){
//     return true;
//   }
//   return false;
// }
// console.log(check(-228));


// С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.
// let str = '';

// for (let i = 1; i <= 10; i++){
//   str += i;
// }
// console.log(str);

// С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.
// let str = '';

// for (let q = 1; q < 10; q++){
//   str +=  q;
// }
// let newStr = str.split('').reverse().join('');
// console.log(newStr);


// С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.
// let str = '-';

// for (let q = 1; q < 10; q++){
//   str += q + '-';
// }
// console.log(str);

// Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

// let str = '';
// for (let y = 0; y < 21; y++){
//   str += 'x';
//   document.write(str + '<br>');
// }
// alert(str);

// С помощью двух вложенных циклов нарисуйте следующую пирамидку:
// for (let i = 1; i < 10; i++){
//   for(let j = 1; j < i + 1; j++){  
//     document.write(i);
//   }
//   document.write('<br>');
// }

// Нарисуйте пирамиду, как показано на рисунке, воспользовавшись циклом for

// for (let i = 1; i < 7; i++){
//   for (let j = 1; j < i + 1; j++){
//     document.write('xx');
//   }
//   document.write('<br>');
// }
// let str = '';
// for (let q = 1; q < 4; q++){
//   str += 'xx';
//   document.write(str + '<br>');
// }

// Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.
// let arr = '';
// let result = [];
// for (let q = 0; q < 9; q++){
//     arr += 'x';
//     result[q] = arr;
// }
// console.log(result);

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. 
// Если это так - пусть функция возвращает true, если не так - false.
// function isNumberInRange(num){
//   if (num > 0 && num < 10){
//     return true;
//   }
//   return false;
// }
// console.log(isNumberInRange(0));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. 
// Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// let arr = [0,-2,3,4,-5, 1];

// function isNumberInRange(num){
//   if (num > 0 && num < 10){
//     return true;
//   }
//   return false;
// }

// let newArr = [];
// for (let i = 0; i < arr.length; i++){
//   if (isNumberInRange(arr[i])){
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
// function getDigitsSum(num){
//   let summ = 0;
//   let strin = String(num);
//   for (let i = 0; i < strin.length; i++ ){
//     summ += Number(strin[i]);
//   }
//   return summ;
// }
// let ale =  prompt('Введите число!');
// alert (getDigitsSum(ale));

// Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

// function getDigitsSum(num){
//   let summ = 0;
//   let strin = String(num);
//   for (let i = 0; i < strin.length; i++ ){
//     summ += Number(strin[i]);
//   }
//   return summ;
// }
// for (let q = 1; q <= 2021; q++){
//   if (getDigitsSum(q) == 13){
//     document.write(q + '<br>');
//   }
// }

// Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. 
// Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven (nam){
//   if (nam % 2 == 0){
//     return true;
//   }
//   return false;
// }
// alert(isEven(5));

// Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
//  Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

//  function isEven (nam){
//   if (nam % 2 == 0){
//     return true;
//   }
//   return false
// }

// let arr = [1,1,2,11,21,22,4,36];
// let res = [];
// for (let i = 0; i < arr.length; i++){
//   if (isEven(arr[i])){
//     res.push(arr[i]);
//   }
// }
// alert(res);

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).
// function getDivisors(nums){
//   let arr = [];
//   for (let q = 0; q <= nums; q++){
//     if (nums % q == 0){
//       arr.push(q);
//     }
//   }
//   return arr;
// }
// alert(getDivisors(26));

// Дана строка. Сделайте заглавным первый символ каждого слова этой строки. Для этого сделайте вспомогательную функцию ucfirst, которая будет получать 
// строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucFirst(str){
//   let arr = str.split(' ');
//   let newStr = [];
//   for (let o = 0; o < arr.length;o++){
//     newStr.push(arr[o][0].toUpperCase() + arr[o].slice(1));
//   }
//   return newStr.join(' ');
// }
// alert(ucFirst('привет родной ну как ты сам'))

// Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// function retFirst(str){
//   let arr = str.split('_');
//   let newArr = [];
//   let newStr = '';
//   for (let q = 1; q < arr.length; q++){
//     newArr.push(arr[q][0].toUpperCase() + arr[q].slice(1));
//   }
//   newStr = arr[1] + newArr.join('_');
//   return newStr;
// }
// alert(retFirst('raw_text_hello'));

// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст
//  элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// function inArray (text, arr){

//   for (i = 0; i < arr.length; i++){
//     if (arr[i] == text){
//       return 'Введённое слово присутствует в массиве!';
//     }
//   }
//   return 'Данное слово отсутствует в массиве!';
// }

// let ar = ['quq', 12, 'yes'];

// alert(inArray('ququ', ar));


// Дана строка, например, '123456'. Сделайте из нее '214365'.

// function reverseStr(stringg){
//   let arr = stringg.split('');
//   let newArr = [];
//   for (let i = 1; i < arr.length; i += 2){
//     newArr.push(arr[i] + arr[i - 1]);
//   }
//   return newArr.join('');
// }
// alert(reverseStr('123456'));

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. 
// И так, пока сумма не станет однозначным числом (9 и менее).

function recurs(num){
    let str = String(num).split('');
    let summ = 0;
    for(let i = 0; i < str.length; i++){
      summ += Number(str[i]);
      if (summ > 9) recurs(summ);
      else console.log(summ);
    }
}

console.log(recurs(21));

