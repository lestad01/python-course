

//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
// let str = 'Я-учу-javascript!';
// let newStr =  str.replace(/-/g, '!');
// console.log(newStr);


//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// let str = 'я учу javascript!';
// let newStr = str.split(' ');
// for (let i = 0; i < newStr.length; i++){
//   console.log(newStr[i]);
// } 


// let str = 'я учу javascript!';
// let newStr = str.split('');
// for (let q = 0; q < newStr.length; q++){
//   console.log(newStr[q]);
// }

// let str = '2025-12-31';
// // let arr = str.split('-');
// // let newStr = arr[2] + '.' + arr[1]  + '.' + arr[0];
// // console.log(newStr);


// let newStr = str.replace(/-/g, '.');
// console.log(newStr);
// console.log(newStr.slice(8) + newStr.slice(4,8) + newStr.slice(0, 4));


// let arr = ['я', 'учу', 'javascript', '!'];
// let str = arr.join('+');
// console.log(str);

// Преобразуйте первую букву строки в верхний регистр.
// let str = 'лухари браучер';
// let newStr = str.substr(0,1).toUpperCase() + str.substr(1);
// console.log(newStr);

//Преобразуйте первую букву каждого слова строки в верхний регистр.

// let str = 'привет братишка ну как изцучение java script ?';
// let newStr = str.split(' ');
// for (let i = 0; i < newStr.length; i++){
//    newStr[i] = newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1);
// } 
// console.log(newStr.join(' '));

let str = 'var_test_text_terxet_alberto_win';
let newStr = str.split('_');
for (let x = 1; x < newStr.length; x++){
    newStr[x] = newStr[x].slice(0,1).toUpperCase() + newStr[x].slice(1);
}
console.log(newStr.join(''));














