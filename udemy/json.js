"use strict";

const persone = {
    name: 'Alex',
    phone: '+79170471719',
    parents: {
        mom: 'Natali',
        dad: 'Petr'
    }
};
//глубокая копия объекта (создание независимого эхкземпляра)
const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Olga';
console.log(persone);
console.log(clone);

// console.log(JSON.stringify(persone));
// console.log(JSON.parse(JSON.stringify(persone)));





















