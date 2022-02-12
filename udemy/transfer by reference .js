

// let a = 5;
// let b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //передает ссылку на существующий объект

// copy.a = 10;

// console.log(copy);
// console.log(obj);



// function copy (mainObject){
//     let objCopy = {};
//     let key;
//     for (key in mainObject) {
//         objCopy[key] = mainObject[key];
//     }
//     return objCopy;
// }

// let numbers = {
//     a:2,
//     b:5,
//     c: {
//         x: 9,
//         y: 3
//     }
// };

// const newNumbers = copy(numbers); //клонируем объект (копию)

//  newNumbers.b = 11;
// console.log(newNumbers);
// console.log(numbers);


// const add = {
//     d: 17,
// }

// console.log(Object.assign(numbers, add));
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c', 'd'];
// const newArr = oldArr.slice();
// newArr[1] = 'good';

// console.log(newArr);
// console.log(oldArr);



//создание поверхностной копии, чтобы можно было на основе старого оъекта
// или массива создавать новый

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet)

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);


//4 способ
const array = ['a', 'b'];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
}

const newObje = {
    ...q
};









