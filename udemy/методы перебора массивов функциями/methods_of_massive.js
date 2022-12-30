'use strict';
//все указанные методы вогзвращают новый массив
//filter (фильтрация элементов в массиве) 
//const names = ['Ivan', 'Ksenia', 'Vladilen', 'Alex'];

//задачка получить  имена которые меньше 5 символов
// const shortNames = names.filter(function(name) {
//         return name.length < 5;
// });

// console.log(shortNames);

// map
// const answers = ['IvAn', 'ANNa', 'AlEx', 'NikOlAi'];

// const result = answers.map(item => {
//     return item.toLowerCase();
// });
// console.log(result);

//примерчик 
// let answers = ['IvAn', 'ANNa', 'AlEx', 'NikOlAi'];

// answers = answers.map(item => {
//     return item.toLowerCase();
// });
// console.log(answers);

//every/some
//some берет элемент и перебирает массив оба метода возвращают буллиновое значение
//const some = [4, 'qwq', 2, 'strings'];

// если хотя бы элемент подходит под услови то будет true
// console.log(some.some(item => {
//     return typeof(item) === 'number';
// }));
//действует на все элементы массива (если все элементы подходят под условие то true)
// console.log(some.every(item => {
//     return typeof(item) === 'number';
// }));


// reduce
// данный метод предназначен для схлопывания или собирать массив в одно единое целое

// const arr = [4,5,1,3,2,6];
// //sum - сумма аргументов элементов (изначально равен 0)
// // cyrrent - непосредственно сам элемент массива 
// // 0 + 4 -> 4 + 5 -> 9 + 1 -> и т.д.


// const result = arr.reduce((sum, current) => sum + current, 3); 
// console.log(result);

const arr = ['apple', 'pear', 'plum', 'orange'];

const res = arr.reduce((sum,current) => `${sum}, ${current}`);
console.log(res);

// entries превращает в мтарицу (масив массивов)
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);
console.log(newArr);


