// в функцию передается массив целых чисел и число r. Необходимо написать функцию, 
//которая вернет булево значение. true в случае если в переданном массиве есть два числа, сумма которых равна числу r, иначе false

// function check(arr, num){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//       if(arr[i] + arr[j] == num){
//         return true;
//       }
//     }
//   }
//   return false; 
// }

// console.log(check([10, 15, 3, 7], 17));
// console.log(check([10, 15, 3, 7], 20));


// В функцию передается целое положительное число. Необходимо сделать так , 
//чтобю функция возвращала сумму всех цифр в переданном числе

// function sumDigitals(num){
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   } 
  // return sum;
    // let str = num.toString();
    // let arr = [...str];

    // return (arr.reduce((acamulate, item) => acamulate + (+item), 0));
    }


// console.log(sumDigitals(123));
// console.log(sumDigitals(9045));
// console.log(sumDigitals(3));

//map
// Метод arr.map является одним из наиболее полезных и часто используемых.
// Он вызывает функцию для каждого элемента массива 
// и возвращает массив результатов выполнения этой функции.

// let result = arr.map(function(item, index, array) {
//   // возвращается новое значение вместо элемента
// });
// Например, здесь мы преобразуем каждый элемент в его длину:

//  let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.toUpperCase());
// console.log(lengths);


//Vladilen Minin
// context определяет как функция была вызвана
//this это тоже самое что и person
//метод call возвращает эту же фукнкицю , с указанным контекстом в параматере (в аргументе)

// const person = {
//   surname: 'Старк',
//   knows: function (what, names){
//     console.log(`Ты ${what} знаешь, ${names} ${this.surname}`)
//   }
// }
// const john = {surname : 'Сноу'}

// person.knows('всё','Бран')
// person.knows.call(john, 'ничего не', 'Джон')
// person.knows.apply(john, ['ничего не', 'Джон'])
// person.knows.call(john, ...['мало чего', 'Джон'])

//
// function Person(name, age){
//   this.name = name;
//   this.age = age;

//   console.log(this);
// }

// const elena = new Person ('Elena', 20);

// ======= Явно передаем контекст
// function LogThis(){
//   console.log(this)
// }
// const obj = {num: 42}
// LogThis.apply(obj);
// LogThis.call(obj);
// LogThis.bind(obj)();
// // ======= Неявно передаем контекст
// const animal = {
//   legs: 4,
//   LogThis: function (){
//     console.log(this)
//   }
// }

// animal.LogThis();

// function Cat(color) {
//   this.color = color;
//   console.log('This', this)
//   ;( () => console.log('Arrow this', this))()
// }
// new Cat('red');

// ===== оператор New
function Cat(color, name){
  this.color = color;
  this.name = name;
}

// const cat = new Cat('black', 'КОТ');
// console.log(cat);

// function myNew(constructor, ...args){
//   const obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype)
//   return constructor.apply(obj, args) || obj
// }

// const cat = myNew(Cat, 'black', 'КОТ')
// console.log(cat);

const cat = new Cat()
console.log(cat);


