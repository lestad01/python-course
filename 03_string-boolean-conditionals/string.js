
// способы записи строк
let singleQuote = 'Строка в одиночных кавычках';
let doubleQuote = "Строка в двойных кавычках";
let LickQuote = `Строка в обратных кавычках`;

// многострочные тексты
let multiline1 = 'Строка\nc\ переносами';
let multiline2 = `Строка с переносами`;


let str1 = 'первая строка';
let str2 = 'Вторая строка';

let concat = str1 + '\n' + str2; // первая строка\nВторая строка
console.log(concat);
let LickConcat = `${str1}
${str2}`; //Первая строка\nВторая строка

let greetings = 'Hi';
let name = 'Тимофей';
console.log(`${greetings}, ${name}! Добро пожаловать!`); //Привет,Тимофей! Добро пожаловать!


console.log('"Кавычка в кавычках: \'"');
console.log("'Кавычка в кавычках: \"'");
console.log(`'Кавычка в кавычках: \`'`);
console.log('Символ табуляции:\t');
console.log('Обратный слеш: \\');
console.log('\x31'); //цифра 1 в UTF-8 в hex
console.log('\u0031'); //цифра 1 в UTF-16 в hex
console.log('\u{1F354}'); // символ эмодзи гамбургер, код в UTF-32 в hex
