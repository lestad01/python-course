'use strict';


// добавляем в начало массива

let w = [77, 88, 99]; // если w = [ ] то добавления не происходит

function addToStart(n) {
    let temp = [];
    temp[0] = n;
    for (let i = 0; i < w.length; i++) {
        temp.push(w[i]);
    }
    w = temp;
}

addToStart(0);
console.log(w); // [100, 77, 88, 99];
// где баг?




