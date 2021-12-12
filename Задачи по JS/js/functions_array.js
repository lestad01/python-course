
// let str = '';
// let arr = [];
// for (let i = 0; i < 10; i++){
//   str += 'x';
//   arr[i] = str;
// }
// console.log(arr);


// let arr = [];
// for (let i = 1; i < 10; i++){
//   let str = '';
//   for(let j = 1; j <= i; j++){
//     str += i;
//     arr[i - 1] = str;
//   }
  
// }
// console.log(arr);

//Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
//Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
//Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']

// const arrayFill = function(value, quantity) {
//   let arr = [];
//   for (let i = 1; i <= quantity; i++){
//     arr.push(value);
//   }
//   return console.log(arr);
// };
// arrayFill('y', 6);

//Дан массив с числами. 
//Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// let arr = [5,2,2,1,2,1];

// let num = 0;
// let sum = 0;
// while (sum < 11){
//   sum += arr[num];
//   num++;
// }
// console.log(num);



//Дан массив с числами. 
//Не используя метода reverse переверните его элементы в обратном порядке.

// let arr = [1,2,3,4,5,6,7];
// let result = [];
// for (let i = arr.length - 1; i >= 0; i--){
//   result.push(arr[i]);
// }
// console.log(result);

// Переворот объекта
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let result = {};

// for (let key in obj){
//   result[obj[key]] = key;
//   console.log(obj[key]);
// }
// console.log(result);

//Подсчет количества элементов
// let arr = ['a','b','c','d','d','e','f','f','a','a','c'];
// let count = {};

// for (let i = 0; i < arr.length; i++){
//   if(count[arr[i]] === undefined){
//     count[arr[i]] = 1;
//   } else {
//     count[arr[i]]++;
//   }
  
// }
// console.log(count);

//Перебор многомерных массивов

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     console.log(arr[i][j]);
//   }
// }

//Многомерные массивы
// let arr = [[1, 2, 3], [4, 5], [6]];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     result += arr[i][j];
//   }
// }
// console.log(result);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//   for (let j = 0; j < arr[i].length; j++){
//     for (let z = 0; z < arr[i][j].length; z++){
//       result += arr[i][j][z];
//     }
//   }
// }
// console.log(result);





