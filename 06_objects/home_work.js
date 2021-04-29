
// Task №1
// Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.
// Пример использования:

// let objects = [
//   { Name: 'Василий', surname: 'Васильев' },
//   { Name: 'Иван', surname: 'Иванов' },
//   { Name: 'Пётр', surname: 'Петров' }
//   ];

// let newObjects = [];

// function arrFilter(obj, property, value){
//   for ( let k in obj) {
//     if (obj[k] [property] === value){
//       newObjects.push(obj[k]);
//     }
//   }
//   return newObjects;
// }

// console.log(arrFilter(objects, 'surname', 'Васильев'));

// // через Filter
// function filterSearch(objects, property, value){
//   return objects.filter(item => item[property] === value);
// }
// console.log(filterSearch(objects, 'Name', 'Иван' ));

// Task №2
// Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями. Массив должен содержать объекты со свойствами:
// value — значение для атрибута value тэга option
// label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
// Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент массива значений.
// Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.
// Возвращаемое значение — DOM-элемент select.

  let aray = [
    { label: 'JavaScript', value: 'JavaScript'},
    { label: 'Python', value: 'Python' },
    { label: 1, value: 1 },
    { label: 'PHP', value: 'PHP'},
  ];

   let arrayNewObj = [1, 2, 'три', 'четыре', 4];

const select = document.createElement('select');
const selectInBody = document.body.appendChild(select);

function createClickSelect(arr, selectValue){
  arr.forEach(function(element) {
    const option = document.createElement('option');
    option.value = element.value;
    option.innerHTML = element.label;
      selectInBody.appendChild(option);
      if(option.value === selectValue){
        option.setAttribute('selected', true);
      }
  });
    return selectInBody;
}

createClickSelect(aray, 'Python');


// Task № 3
// Задание

// Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:
// Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, 'три', 'четыре', ...]
// Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... }
// Рекомендации к выполнению
// Есть принцип разработки, который называется "Принцип единой ответственности" или "Single responsibility principle". В соответствии с ним, любая сущность в программе должна отвечать за что-то одно и не стараться делать всю работу сразу.
// Соблюдение этого правила делает код программы более понятным для разработчика и легко поддающимся изменениям в будущем.Вы уже написали код, который делает своё дело, то есть создаёт выпадающий список со значениями.
// Чтобы научить вашу программу работать с разными форматами входных данных, необязательно усложнять уже существующий код. Вы можете создать отдельную функцию, которая преобразует входящие данные в массив объектов для функции из предыдущего задания.
// Помимо выше указанных преимуществ, такой подход позволит вам тестировать работу только этой функции, так как функция с прошлого задания должна быть уже протестирована, а её работу вы не изменяете.


// let aray = [
//   { label: 'JavaScript', value: 'JavaScript'},
//   { label: 'Python', value: 'Python' },
//   { label: 1, value: 1 },
//   { label: 'PHP', value: 'PHP'},
// ];
// let arrayNewObj = [1, 2, 'три', 'четыре', 4];
// let ar = [ 1, 'null', 2, 'один'];

// function createClickSelect (selectedObj){

//   const select = document.createElement('select');
//   const selectInBody = document.body.appendChild(select);
//   selectedObj.forEach(function(item) {
//       let option = document.createElement('option');
//       option.value = item.value;
//       option.innerHTML = item.label;
//       selectInBody.appendChild(option);
//     });
//   return selectInBody;
// }

// function convertArr(objNew){
//   let convertedArr = [];
//   if (Array.isArray(objNew)){
//     const el1 = objNew[0];
//     if (['number', 'string'].includes(typeof el1)) {
//       for (const item of objNew) {
//         convertedArr.push({value: item, label: item});
//       }
//     } else {
//       convertedArr = objNew;
//     }
//   } else {
//     const keys = Object.keys(objNew);
//     for (const key of keys){
//       convertedArr.push({value: key, label: objNew[key]});
//     }
//   }
//   console.log(convertedArr);
//   return convertedArr;
// }

// createClickSelect(convertArr(ar));
// createClickSelect(convertArr(aray));




