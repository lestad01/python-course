
// First task
let x1 = 2;
let y1 = 3;

let x2 = 10;
let y2 = 5;

let firstPoint = Math.abs(x1 - x2);
let secondPoint = Math.abs(y1 - y2);

console.log('Площадь прямоугольника =', firstPoint * secondPoint);

// Second task
let a = 13.123456789;
let b = 2.123;
let n = 5;

let aNumber = Math.round(a % 1 * Math.pow(10, n));
let bNumber = Math.round(b % 1 * Math.pow(10, n));
console.log(aNumber);
console.log(bNumber);

console.log('Дробная часть числа a больше b', aNumber > bNumber);
console.log('Дробная часть числа a меньше b', aNumber < bNumber);
console.log('Дробная часть числа a больше либо равна b', aNumber >= bNumber);
console.log('Дробная часть числа a меньше либо равна b', aNumber <= bNumber);
console.log('Дробная часть числа a равна b', aNumber === bNumber);
console.log('Дробная часть числа a не равна b', aNumber !== bNumber);

// Third task

 let Min = -100;
 let Max = 5;

let rand = Math.round(Min - 0.5 + Math.random() * (Max - Min +1));

 if (rand % 2 === 0) {
  if (rand < Max) {
      rand++;
  } else {
      rand--;
  }
}

console.log(rand);