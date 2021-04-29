
// first task
let password = 'qaz-xsw';

if (password.length >= 4 && (password.includes('-') || password.includes('_'))) {
  console.log('Пароль надёжный');
} else {
  console.log('Пароль недостаточно надёжный');
}

// second task

let names = 'aLeksaNdeR';
let surName = 'cherNov';


let lowName = names[1].toLowerCase();
let lowSurName = surName[1].toLowerCase();

let upName = names[0].toUpperCase();
let upSurName = surName[0].toUpperCase();

let sumName = upName + lowName;
let sumSurName = upSurName + lowSurName;

// console.log(sumName);
// console.log(sumSurName);

if (names === sumName && surName === sumSurName ) {
  console.log('Имя и фамилия остались без изменений');
} else {
  console.log('Имя и фамилия были изменены');
}
