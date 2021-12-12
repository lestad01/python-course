const o = [];
o[0] = 1; //сложность o от 1
//O(n) линейная сложность - один цикл это линейная сложность. 
//Чем больше i нужно пройти расстояние тем больше уквеличивается прцоессорное время
// for (let i = 0; i < 10; i++){

// }

// задачи Считаем сложность алгоритма
// Дан массив из  чисел, и задача - вывести в консоль каждое из них
// const arr = [1,2,0,6,12,21,3,22,21,123,231,511,1,2,0,6,12,21,3,22,21,123,231,511];

// arr.forEach(val => console.log(val)); // линейная сложность

//O(1) = arr[2] = 3 - статика O(1)
// есть пустой linkedList, в который мы вставляем несколько чисел. Нам нужно оценить сложность алгоритма вставки одного числа в linkedList
// const linkedList = [];
// linkedList[0] = 1;  - это статика O(1)
// linkedList[5] = 2;

//Дан массив из нескольких чисел, задача найти число 21 например
// const linked = [1,2,0,6,12,21,3,22,21,123,231,511,1];
// let num = 123;
// linked.forEach(num => console.log(num));

// bubble sort
// const bubble = (arr)=> {
//   for (let i = 0; i < arr.length; i++){
//     let wasSwap = false;
//     for (let j = 0; j < arr.length - 1; j++){
//        if(arr[j] > arr[j + 1]){
//         const temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//         wasSwap = true;
//        }
//     }
//     if (!wasSwap) break;
//   }
//   return arr;
// };
// console.log(bubble([3,2,3,31,23,6]));
//
//Insertion sort
// const insertion = (arr) =>{
//   for (let i = 1; i < arr.length; i++){
//     let j = i - 1;
//     const temp = arr[i];
//     while( j >= 0 && arr[j] > temp){
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// };
// console.log(insertion([1,2,0,6,12,21,3,22,21,123,231,511,1])); //O(n*2)
//binary sort - его главное условие массив должен быть отсортирован 
// const bin = (arr, val) => {
//   let middle = Math.floor(arr.length / 2);
//   const maxVal = arr[arr.length - 1];
//   if (val > maxVal){
//     return - 1;
//   }
//   while(middle >= 0 && middle <= arr.length){
//     if (arr[middle] === val){
//       return arr[middle];
//     }
//     if (arr[middle] > val){
//       middle = Math.floor(middle / 2);
//     }
//     if (arr[middle] < val){
//       middle = Math.floor((arr.length - middle) / 2);
//     }
//   }
//   return -1;
// };
// console.log(bin([1,2,3,4,5,6,7], 3));
//нативный метод сортировки 
// [].sort((a, b) => )
// рекурсия
// const f = function(n) {
//   if (n <= 0){
//     return 1;
//   } else {
//     return (n * f(n - 1));
//   }
// };
// console.log(f(6));
// quick sort
// const q = (arr) => {
//   if (arr.length < 2){
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);

//   const left = arr.filter(val => val < arr[mid]);
//   const right = arr.filter(val => val > arr[mid]);

//   return [...q(left), arr[mid], ...q(right)];
// };
// console.log(q([4,3,0,1,2,3,10,2]));
// console.log([1,2,3,4], ...[2,31,2,4]);

//merge sort
const merging = (left, right) => {
  const result = [];
  while (left.length && right.length){
    if(left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length){
    result.push(left.shift());
  }
  while (right.length){
    result.push(right.shift());
  }
  return result;
};

const merge = (arr) => {
  if(arr.length < 2){
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);


  return merging(merge(left), merge(right));

};

console.log(merge([3,2,13,12,30,11,4]));