// let digit = 20;
// let otherDigit = digit;

// //исходное значение не меняется, так как otherDigit копирует значение из digit
// otherDigit += 5;

// let obj = {model: 'VW Polo'};
// let otherObj = obj;

// // jbj и otherObj ссылаются на один и тот же объект, поэтому свойства поменяются и там и там
// otherObj.model = 'Volkswagen Polo';

// console.log(digit);
// console.log(otherDigit);
// console.log(obj);
// console.log(otherObj);

//obj1 и obj2 - ссылки на один и тот же объект...
// let obj1 = {name: 'Какой-то объект'};
// let obj2 = obj1;

// //юююи они правы
// console.log(obj1 === obj2);

// // obj2 становится ссылкой на новый объект , хоть и с такими же свойствами
// obj2 = {name: 'Какой-то объект'};

// //и теперь obj1 and obj2 - ссылки на разные объекты, то есть они не равны
// console.log(obj1 === obj2);

// let me = {
//   name: 'Тимофей',
// };

// //функция вернёт получившийся объект, но это будет тот же объект,
// // который мы передали в первый аргумент, то есть она изменит объект me и вернет его
// let meWe = Object.assign(me, {name: 'не тимофей'}, {surname: 'Не Чернов'});

// //me and meWe - один и тот же объект и мы его изменили
// console.log(meWe);
// console.log(me);

// console.log(me === meWe);//true

//решаем вышеуказанную проблему 
let me = {
  nameIs: 'Александр',
};

//подмешиваем свойства в свежесозданный пустой объект ...
let newWe = Object.assign({}, me, {nameIs: 'Не Сашко', surname: 'Не Чернов'});
// ... или делаем то же самое с помощью spread
let newMeWithSprea = {...me, nameIs: 'Не Сашко', surname: 'Не Чернов'};

//исходный объект остался нетронутым
console.log(me);
console.log(newWe);
console.log(newMeWithSprea);






