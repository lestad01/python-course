// let nameIs = 'Александр';
// let surnmae = 'Чернов';
// let middle = 'Сергеевич';

// let me = {
//   name: nameIs,
//   surnmae: surnmae,
//   middleName: middle,
//   birthDay: {year: 1995, mont: 7, day: 1},
//   occupation: 'Госслужащий',
//   married: false,
//   'property with spaces': null,
//   // undefined для примера, использовать его в качестве
//   //значения не нужно!
//   'property.with.dots': undefined
// };


// //создание нового свойства объекта
// me.education = 'УГАТУ';
// me.occupation = 'Безработный';

// // те же действия со строками
// me['property with spaces'] = 42;
// me['property.with.dots'] = 22;

// //удаление свойства из объекта
// delete me.education;
// delete me['property with spaces'];

// //получение значения свойства
// let myName = me.name;
// let myBirthDay = me.birthDay.year;
// let fortyTwo = emptyObj['property with spaces'];
// //значение несуществующего свойства - undefined
// let emptyProp = enmptyObj.someProp;

// //пустой объект
// let emptyObj = {};



function printObjectProperty (obj, propName){
  console.log(obj[propName]);
}
let me = {
  myName: 'Александр',
  mySurName: 'Чернов',
  middleName: 'Сергеевич',
  birthDay: {year: 1995, month: 7, day: 1},
  occupation: 'УЗИО г. Уфы',
  married: false
};

printObjectProperty(me, 'myName');
printObjectProperty(me, 'mySurName');
printObjectProperty(me, 'middleName');


