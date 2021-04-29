"use strict";

// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
// function squareNum(num){
//   return num * num;
// }
// alert(squareNum(6));

//Сделайте функцию, которая возвращает сумму двух чисел.
// function summNum(a,b){
//   return a + b;
// }
// alert(summNum(5, 13));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
// function differenceNum(a,b,c){
//   return (a - b / c);
// }
// alert(differenceNum(10,20,4));

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке

// function dayZ(numDay){
//   let weeck = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота','воскресенье'];
//   return weeck[(numDay - 1)];
// }

// alert(dayZ(1));


//Сделайте функцию, которая параметрами принимает 2 числа. 
//Если эти числа равны - пусть функция вернет true, а если не равны - false.

// function numbers(a,b){
//   if(a == b){
//     return true;
//   }
//   return false;
// }
// alert(numbers(4,4));

//Сделайте функцию, которая параметрами принимает 2 числа. 
//Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

// function Funk(c, k){
//   if (c + k > 10){
//     return true;
//   }else{
//     return false;
//   }
// }
// alert(Funk(6, 5));

//Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
//Если отрицательное - пусть функция вернет true, а если нет - false.

function negativeNum(b){
  if (b > 0){
    return true;
  } else {
    return false;
  }
}
alert(negativeNum(-2));
alert(negativeNum(2));

