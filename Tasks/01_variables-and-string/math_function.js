// let a = 10;
// let b = 3;
// alert(a % b);

// let a = 10;
// let b = 3;
// if (a % b === 0) {
//     alert('Делится. Результат деления: ' + a/b);
// } else {
//     alert('Делится с остатком. Остаток: ' + a%b);
// }

//Работа со степенью и корнем
// let a = 2;
// let b = 10;
// let st = alert(Math.pow(a, b));

// let a = 245;
// alert(Math.sqrt(a));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let summ = 0;
//   for (let k = 0; k < arr.length; k++){
//     summ += arr[k];
//   }
//   alert(Math.sqrt(summ));


// Работа с функциями округления
// let ran = Math.sqrt(379);
// alert(ran.toFixed(0));
// alert(ran.toFixed(1));
// alert(ran.toFixed(2));


// let ran = Math.sqrt(587);
// let roundUp = Math.ceil(ran);
// let roundDown = Math.floor(ran);

// let obj = { "ceil": roundUp, "floor": roundDown};
// console.log(obj["floor"]);

//Нахождение максимального и минимального числа
// let arr = (4, -2, 5, 19, -130, 0, 10);

// alert (Math.min(4, -2, 5, 19, -130, 0, 10));
// alert (Math.max(4, -2, 5, 19, -130, 0, 10));

//нахождение максимального и минимального числа через массив
// let arr = [4, -2, 5, 19, -130, 0, 10];

// console.log(Math.max.apply(null,arr));
// alert(Math.min.apply(null, arr));

//Работа с рандомом
// function GetRandom (min, max) {
//   return alert(Math.floor(Math.random() * (max - min + 1)) + min);
// }
// GetRandom(0, 100);
// let arr = [];
// for (let i = 0; i < 10; i++){
//   arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
// }
// alert(arr);
//Работа с модулем
// let a = 19;
// let b = 51;
// let difference = a - b;
// alert(Math.abs(difference));

// let a = 28;
// let b = 338;
// let difference = Math.abs(a - b);
// let c = difference;
// alert(c);

// tasks
// среднее арифметическое
// let arr = [12, 15, 20, 25, 59, 79];
// let summ = 0;
// for (let i = 0; i < arr.length; i++){
//   summ += arr[i];
//   let rage = summ/arr.length;
//   alert(rage.toFixed(1));
// }
// факториал
// let fact = 1;
// let num = 6;
// for (let i = 1; i <= num; i++){
//   fact = fact * i;
//    результаты каждой строки умножается друг на друга
// }
// console.log(fact);
