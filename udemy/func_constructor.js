"use strict";
//ES5

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

// class User {
//     constructor(name,id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello ${this.name}`);
//     }
//     exit(){
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// } пример синтаксиса классов (просто пример) разбирать будем в след уроке


User.prototype.exit = function(name) {
    console.log(`Пользователь ${this.name} вышел`);
};

const ivan = new User('Ivan', 28); //создаем новый объект со свойстваи,которые указаны выше
const alex = new User ('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);







