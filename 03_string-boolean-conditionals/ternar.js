
let x = 10;

if (Math.random() > 10) {
  x = 10;
} else {
  x = 9;
}
console.log(x);

// аналогичное решение

x = Math.random() > 0.5 ? 10 : 20;
console.log(x);

// плохой пример

let age = 23;
let isExample = age > 10 ? false : true;
console.log(isExample);
// нужно так

let age1 = 11;
let goodExample = age1 > 10;

let soso = goodExample  ? true : false;
console.log(soso);
