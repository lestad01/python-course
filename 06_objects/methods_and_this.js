// let me = {
//   birthDate: {year: 1995, month: 7, day: 1},
//   getAge: function () {
//     let now = new Date();
//     let born = new Date(
//       this.birthDate.year,
//       this.birthDate.month + 1,
//       this.birthDate.day
//     );
//     let diffInMilliseconds = now.getTime() - born.getTime();
//     return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365);
//   }

// };
// console.log(me.getAge());

// let me = {
//   birthDate: {year: 1995, month: 7, day: 1},
//   getAge() {
//     let now = new Date();
//     let born = new Date(
//       this.birthDate.year,
//       this.birthDate.month + 1,
//       this.birthDate.day
//     );
//     let diffInMilliseconds = now.getTime() - born.getTime();
//     return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365);
//   }

// };
// console.log(me.getAge());

let nameIs = 'soska';
let surname = 'lvovna';

function getFullName(){
  return this.nameIs + ' ' + this.surname;
}

let obj = {nameIs, surname, getFullName};
console.log(obj.getFullName());

obj.whoAmI = function (){
  console.log(`Меня зовут ${this.nameIs} ${this.surname}`);
};
obj.whoAmI();


delete obj.getFullName;
console.log(obj.getFullName());

let otherObj = {
  someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());

