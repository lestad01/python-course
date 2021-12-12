//Задача: реализуйте функцию inArray, которая будет проверять, есть ли в массиве элемент с таким значением или нет. 
//Первым параметром функция должна принимать значение, а вторым - массив. 
//Если такой элемент есть - функция должна вернуть true, а если нет - false.

// function inArray (val, arr){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == val){
//       return val;
//     }
//   }
//   return false;
// }
// let array = [1, 2, 3, 4, 5,1,12];
// console.log(inArray(2,array));

// Задача: реализуйте функцию isSimple, которая параметром будет принимать число и проверять, простое оно или нет. 
// Простое число - это число, которое не делится ни на одно другое число (кроме как на 1 и на само себя - на это делятся все числа). 
// Если число простое - функция должна вернуть true, в противном случае false.

// function isSimple(num){
//   for (let i = 2; i < num; i++){
//     if (num % i == 0){
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isSimple(7));


// Задача: реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. 
// К примеру, если мы передадим число 24 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24].

// function getDivisors(num) {
//   let newArr = [];

//   for (let i = 1; i <= num; i++){
//     if (num % i == 0){
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// console.log(getDivisors(10));


//реализуйте функцию getIntersection, которая параметрами будет 
//принимать два массива и возвращать массив элементов, которые есть и в одном, и во втором массиве (это называется пересечение массивов). 
//К примеру, getIntersection([1, 2, 3], [2, 3, 4]) должно вернуть [2, 3].

// function getIntersection(arr1, arr2){
//   let mainArr = [];
//   for (let i = 0; i < arr1.length; i++){
//     if (inArray(arr1[i], arr2)){
//       mainArr.push(arr1[i]);
//       mainArr.sort();
//     }
//   }
//   return mainArr;
// }

// console.log(getIntersection([3,2,1,4], [3,2,4,6,12]));



//реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать наибольший общий делитель (НОД) этих двух чисел. 
//К примеру, для чисел 12 и 18 НОД равен 6.

// function getGreatestCommonDivisor(num1, num2){
//   let divisors = getIntersection(getDivisors(num1), getDivisors(num2));
//   return Number(Math.max.apply(null,divisors));
// }
// console.log(getGreatestCommonDivisor(8, 24));



//Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
//Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, 
//делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// let str = 'Hello my friends, how are you?';

// function ucFirst (strings){
//   let newStr = strings.split(' ');
//   for (let i = 0; i < newStr.length; i++){
//     newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1);
//   }
//   return (newStr.join(' '));
// }
// console.log(ucFirst(str));


//Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.

// let str = 'var_text_hello';
// let newStr = str.split('_');
// for (let i = 1; i < newStr.length; i++){
//   newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1);
// }
// console.log(newStr.join(''));


//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром 
//должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.

// function inArray (text, arr){
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] == text){
//       return true;
//     } 
//   }
//   return false;
// }

// console.log(inArray('js', ['jq']));

//Дана строка, например, '123456'. Сделайте из нее '214365
let str = '123456';
let newStr = str.split('');
let str2 = '';
for (let i = 0; i < newStr.length - 1; i += 2){
  str2 = newStr[i];
  newStr[i] = newStr[i + 1]; // добавляется 2 4 6
  newStr[i + 1] = str2; //214365
}
str = newStr.join('');
console.log(str);


