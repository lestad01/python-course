"use strict";


// function showThis(a,b) {
//     function sum() {
//         return a + b;
//     }

//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//         // console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello! ' + this.name);
//     };
// }
// let ivan = new User('Ivan', 23);
// console.log(ivan.hello());


// function sayName (surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smithty']);

// function count (num) {
//     return this*num;
// }
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));


// 1) Обычная функция: this - window, но если есть строгий режим - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах это новый экземлпяр объекта
// 4) Ручная привязка this: call, apply, bind


// const btn = document.querySelector('button');
// btn.addEventListener('click', function() {
//     // const.log(this);
//     this.style.backgroundColor = 'red';
// });

const btn = document.querySelector('button');
btn.addEventListener('click', ()=> {
    // const.log(this);
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function () {
        const say = ()=> {
            console.log(this);
            console.log(this.num);
        };
        say();
    }
};

obj.sayNumber();


const double = (a)=> a * 2;


