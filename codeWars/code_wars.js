//Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
//Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!

//Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:
function areYouPlayingBanjo(name) {
    // Implement me
    const str = name.substring(0, 1);
    if (str == 'R' || str == 'r')
    console.log(name + " plays banjo");
    else
      console.log(name + " does not play banjo");
  }
  areYouPlayingBanjo('Ruslan');



  //Напишите вызываемую функцию, repeatStrкоторая повторяет 
  //заданную строку stringточное количество nраз.

  function repeatStr (num, str) {
    let newStr = '';
    for (let i = 1; i <= num; i++){
      newStr += str;
    }
    console.log(newStr);
  }
  repeatStr(5, 'Hi');
// альтернативный вариант 
// Метод repeat() конструирует и возвращает новую строку, содержащую указанное количество 
//соединённых вместе копий строки, на которой он был вызван.
function repeatStrSecond (num, str) {
    console.log(str.repeat(num));
  }
  repeatStrSecond(3, 'Kafka');

  //Учитывая массив целых чисел, вернуть 
  //новый массив с удвоением каждого значения.

  function maps(x){
    let result = [];  
    for (let i = 0; i < x.length; i++){
      let newArr = x[i] * 2;
      result.push(newArr);  
    }
    console.log(result);
  }
  maps([1,2,3]);


  function maps(x){
    console.log(x.map(n => n * 2));
  }
  maps([2,1,2]);



// Первое столетие охватывает период с 1 года по 100 год включительно , 
// второе столетие — с 101 года по 200 год включительно и т. д.
// Учитывая год, верните столетие, в котором он находится.
function century(year) {
    // Finish this :)
    let age = Math.ceil(year / 100);
    console.log(age);
  }
  century(1100);

  const centurySec = year => Math.ceil(year/100)

  function century(year) {
    let  century = 0;
    
    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
  }
  //------------------------
  //Создайте простую функцию с именем приветствие , которая возвращает самое известное «привет, мир!».
  //Конечно, это настолько просто, насколько это возможно. Но насколько умным вы можете быть, 
  //чтобы создать самый креативный приветственный мир, какой вы только можете себе представить? 
  //Какое решение «hello world» вы хотели бы показать своим друзьям?
  /*
⢳⣿⣿⡏⢚⠿⠓⡨⠒⠒⠒⠲⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣾⣿⣿⢣⢿⡕⠫⠊⢀⢌⠹⡐⡟⢣⠄⠄⠄⢀⣠⣤⣤⣤⣤⣤⣀⠄⠄⠄
⣸⣿⣿⣿⣠⠏⡔⠁⠄⠐⠢⠣⢡⣙⠄⡇⣶⣿⣿⣿⣿⢟⣻⣿⣿⠏⠄⠄
⣿⣿⣿⡇⢩⠘⣴⣿⣥⣤⢦⢁⠄⠉⡄⡇⠛⠛⠛⢛⣭⣾⣿⣿⡏⠄⠄⠄
⣿⣿⣿⡇⠹⢇⡹⣿⣿⣛⣓⣿⡿⠞⠑⣱⠄⢀⣴⣿⣿⣿⣿⡟⠄⠄⠄⠄
⣿⣿⣿⣧⣸⡄⣿⣪⡻⣿⠿⠋⠄⠄⣀⣀⢡⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄
⠘⣿⣿⣿⣿⣷⣭⣓⡽⡆⡄⢀⣤⣾⣿⣿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⠄⠄
⠄⢨⡻⡇⣿⢿⣿⣿⣭⡶⣿⣿⣿⣜⢿⡇⡿⠟⠉⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠸⣷⡅⣫⣾⣿⣿⣿⣷⣙⢿⣿⣿⣷⣦⣚⡀⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⢉⣾⡟ */ function greet() {
    return "hello world!"}/*⠄
⠄⠄⠻⢿⣿⣿⣿⣿⣿⣿⣿⢟⣫⣾⣿⣷⡹⣿⣿⣿⣿⣿⣿⣿⡟⠄⠄⠄
⠄⠄⠄⠄⢮⣭⣍⡭⣭⡵⣾⣿⣿⣿⡎⣿⣿⣌⠻⠿⠿⠿⠟⠋⠄⠄⠄⠄
⠄⠄⠄⠄⠈⠻⣿⣿⣿⣿⣹⣿⣿⣿⡇⣿⣿⡿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⠄⠄⣀⣴⣾⣶⡞⣿⣿⣿⣿⣿⣿⣿⣾⣿⡿⠃⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
⣠⣾⣿⣿⣿⣿⣿⣹⣿⣿⣿⣿⣿⡟⣹⣿⣳⡄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄
*/

  function greet () {

    let teerg = "!DLROW OLLEH"
    
    console.log(teerg.split("").reverse().join("").toLowerCase());
    }
    greet();
//---
//
    const rps = (p1, p2) => {
        if (p1 === p2) console.log("Draw!");
        let rules = {rock: "scissors", paper: "rock", scissors: "paper"};
        console.log(`Player 1 choice ${p1}!`);
        console.log(`Player 2 choice ${p2}!`);
        if (p2 === rules[p1]) {
            console.log("Player 1 won!");
        }
        else {
            console.log("Player 2 won!");
        }
      };
      rps("rock","paper");



      function rps(p1, p2) {
        var choices = ['rock', 'paper', 'scissors'];
        var x = choices.indexOf(p1);
        var y = choices.indexOf(p2);
        
        if (x === y) return 'Draw!';
        if (x === 0 && y === 2) return 'Player 1 won!';
        if (x === 2 && y === 0) return 'Player 2 won!';
        if (x > y) return 'Player 1 won!'
        else return 'Player 2 won!';
      }


//Ваша задача — создать функцию, которая выполняет четыре основные математические операции.
//Функция должна принимать три аргумента - операция(строка/символ), значение1(число), значение2(число).
//Функция должна возвращать числовой результат после применения выбранной операции.

function basicOp(operation, value1, value2)
{ 

  // Code
  //return eval(value1 + operation + value2);
  switch(operation){
    case '+': return value1 + value2;
    case '-': return value1 - value2;
    case '*': return value1 * value2;
    case '/': return value1 / value2;
    default: return 'Its not math symbol!';
  }
}
console.log(basicOp('/',2,6));




//Учитывая строку цифр, вы должны заменить любую цифру ниже 5 на «0», 
//а любую цифру 5 и выше на «1». Верните полученную строку.
//Примечание: ввод никогда не будет пустой строкой
function fakeBin(str){
let newStr = "";
for(let i = 0; i < str.length; i++){
  if(Number(str[i]) >= 5){
    newStr += "1"
    }
  else{
    newStr += "0";
    }
  }
  return newStr;
}
console.log(fakeBin('12316'));


function fakeBin(str){
  let arr = str.split('');
  let newarr = [];

  for (let i = 0; i < arr.length; i ++){
    if (arr[i] >= 5 ){
      arr[i] = 1;
      newarr.push(arr[i]);
    } else {
      arr[i] = 0;
      newarr.push(arr[i]);
    }
    //newarr.join('');
  }
  //newarr.join('');
  return newarr.join('');
}
console.log(fakeBin('12316'));

fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');
console.log(fakeBin('12316'));


//Часы показывают hчасы, mминуты и sсекунды после полуночи.
//Ваша задача — написать функцию, которая возвращает время с полуночи в миллисекундах.

function past(hour, minutes, seconds){
  //#Happy Coding! ^_^
  return (('3600' * hour) + ('60' * minutes) + seconds)* 1000 ;
}
console.log(past(0,1,1));

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);
console.log(past(0,1,1));


function past(h, m, s){
  let hours = h * 3600 * 1000;
  let minutes = m * 60 * 1000;
  let seconds = s * 1000;
  
  return hours + minutes + seconds;
}
console.log(past(0,1,1));



//Напишите функцию findNeedle(), которая принимает arrayполный мусор, но содержит один"needle"
//После того, как ваша функция найдет иглу, она должна вернуть сообщение (в виде строки), в котором говорится:
//"found the needle at position "плюс indexон нашел иглу

function findNeedle(haystack) {
  // your code here
  for (let needle of haystack){
    let index = haystack.indexOf('needle');
    if (needle == 'needle'){
      return `found the needle at position ${index}`;
    } 
  }
}

console.log(findNeedle(['hay', 'needle', 'junk', 'hay', 'hay', 'moreJunk']));


// Завершите решение так, чтобы оно возвращало true, если первый переданный 
// аргумент(строка) заканчивается 2-м аргументом (также строкой).

function solution(str, ending){
  // TODO: complete
  return str.indexOf(ending, str.length - ending.length) !== -1;
}
console.log(solution('abcde', 'c1e'));

// 2 вариант
// метод endsWith() определяет, совпадает ли конец данной строки с указанной строкой, или символом, возвращая при этом логическое 
// значение (true если данная строка заканчивается указанной строкой, в противном случае false). 
// Обращаю Ваше внимание, что метод endsWith() является регистрозависимым.

function solution(str, ending){
  return str.endsWith(ending);
}

const solution = (str, ending) => str.endsWith(ending);

// Создайте функцию, которая принимает целое число в качестве 
// аргумента и возвращает "Четное" для четных чисел или "Нечетное" для нечетных чисел.


function even_or_odd(number) {
  if (number % 2 === 0){
    console.log ('Число - чётное');
  } else {
    console.log ('Число - нечетное');
  }
}
even_or_odd(5);

const even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd' ;
console.log(even_or_odd(3));





// Возвращает количество гласных в данной строке.
// Мы рассмотрим a, e, i, o, u как гласные для этого Ката (но не y).
// Входная строка будет состоять только из строчных букв и/или пробелов.


function getCount(str) {
  let vowelsCount = 0;
  const arrSym = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str){
    if (arrSym.includes(char) && str.toLowerCase()){
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(getCount('absv'));

// /[aeiou]/ig - это регулярное выражение, который соответствует любой гласной. 
// Он будет соответствовать любому из a, e, i, o, u, флаг i (/ [aeiou] / яg) 
// делает его нечувствительным к регистру, а флаг g означает «глобальный» или, другими словами, «не останавливаться после первый матч».

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


// В этом ката вы создадите функцию,которая берет список неотрицательных целых чисел 
// и строк и возвращает новый список с отфильтрованными строками.

function filter_list(data) {
  // Return a new array with the strings filtered out
  return data.filter(function(num) {
    if ( typeof(num) === 'number'){
      return true;
    }
  })
}

function filter_list(l) {
  var res = [];
              for(var item=0;item<l.length;item++)
              {
                  if (typeof l[item] === "number")
                  {
                      res.push(l[item]);
                  }
    
              }
              return res;
  }


let arr = [1,2,4,'a',7,0,'n'];
console.log(filter_list(arr));


// В вашем классе был тест, и вы его прошли. Поздравления!
// Но вы амбициозный человек. Вы хотите знать, лучше ли вы, чем средний ученик в вашем классе.

// Вы получаете массив с результатами тестов ваших сверстников. Теперь посчитайте среднее и сравните свой результат.!

// Возврат True если тебе лучше, иначе False!

// Примечание:
//Ваши баллы не включены в массив баллов вашего класса. Для расчета среднего балла вы можете добавить свой балл в данный массив!

function betterThanAverage(classPoints, yourPoints) {
// Your code here
let sumPointsClass = classPoints.reduce((previous, current) => previous + current);
let lengthPointsClass = sumPointsClass / classPoints.length;

if (lengthPointsClass > yourPoints){
return false
} else {
return true
}
}
 
function betterThanAverage(classPoints, yourPoints) {
// Your code here
var classAvg = 0;
for (var i = 0; i < classPoints.length; i++){
classAvg += classPoints[i];
}
classAvg = classAvg/classPoints.length;
return yourPoints > classAvg;
}


// Учитывая массив целых чисел, удалите наименьшее значение. Не изменять исходный массив/список. 
// Если есть несколько элементов с одинаковым значением, удалите элемент с более низким индексом. Если вы получаете пустой массив/список, верните пустой массив/список.
// Не меняйте порядок оставшихся элементов.

function removeSmallest(numbers) {
numbers = numbers.slice(0); // создаем новый массив
const min = Math.min(...numbers);
numbers.splice(numbers.indexOf(min), 1); // удаляем один элемент массива с наименьшим индексом
return numbers;
}


// Банкоматы допускают 4 или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 цифр или ровно 6 цифр.

// Если функции передается допустимая строка PIN-кода, return true, else return false.
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


  function validatePIN (pin) {
    if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (pin[i] > '9' || pin[i] < '0') {
       return false;
    }

  }
  return true;
}


console.log(validatePIN("12.2"));




// Завершите функцию квадратной суммы так, чтобы она квадратировала каждое переданное в нее число, а затем суммировала результаты вместе.

// Например, для [1, 2, 2]него следует вернуть 9because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
  let result = 0;
  for (let i = 0; i < numbers.length; i++){
    let pow = Math.pow(numbers[i], 2);
    result = result + pow;
  }
  return result;
}

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

console.log(squareSum([1,2,3]));





String.prototype.toJadenCase = function () {
D
};


function toJadenCase(str) {
  //...
  let newStr = str.split(" ");
  let res = "";
  let arr = [];
  for (let i = 0; i < newStr.length; i++){
    let elem = newStr[i];
    let firstSymb = elem.substring(0, 1).toUpperCase();
    let otherSymb = elem.substring(1, elem.length);
    res += firstSymb + otherSymb + " ";
    arr.push(res);
    arr.join(' ');
  }
  return arr.join(' ');
   //res;
};


console.log(toJadenCase('выше ярче веселее сильнее'));


// Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. 
// Все пробелы в строке должны быть сохранены.

function reverseWords(str) {
  // Go for it
  str = str.split(" ");
  let newArr = [];
  for (let i = 0; i < str.length; i++){
    newArr.push(str[i].split("").reverse().join(""))
  }
  return newArr.join(" ");
}


function reverseWords(str) {
  return str.split(' ').map( str => str.split('').reverse().join('') ).join(' ');
}

console.log(reverseWords('Hello motherfucker'))


function addBinary(a,b) {
  var c = a + b;
  var res = '';
  while (c >= 1) {
    var res = c % 2 + res;
    c = Math.floor(c / 2);
  }
  return res;
}

function addBinary(a,b){
  return Number(a + b).toString(2);
}


console.log(addBinary(2,2))



//Завершите решение, чтобы оно перевернуло переданную в него строку..

function solution(str){
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--){
      reverse += str[i];
    }
    return reverse;
}

function solution(str){
   let reverse = str.split('').reverse().join('');
   return reverse;
}
const solution = str => str.split('').reverse().join('');

console.log(solution('удачи тебе дед макар'));

function removeEveryOther(arr){
  //your code here
  return arr.filter(function(item, index) {
    return index % 2 === 0;
  } );
  
}
function removeEveryOther(arr){
  let newArr=[];
for (let i = 0; i < arr.length; i += 2){
  newArr.push(arr[i]);
  }
return newArr;
}

let arra =  ["Привет", "тебе", "мальчик", "Миша"];

console.log(removeEveryOther(arra));



function stringToArray(string){
  // code code code
  let arr = string.split(' ')
  return arr;
}

const stringToArray = string => string.split(' ');


console.log(stringToArray("Привет тебе миша sqq"));


//Найти первое непоследовательное число

function firstNonConsecutive (arr) {
for (let i = 1; i < arr.length; i++) {
  if (arr[i] - arr[i - 1] != 1)
    return arr[i];
}
return null;
}
console.log(firstNonConsecutive([1,2,3]))


//Получив список целых чисел, определите, является ли сумма его элементов четной или нечетной.
//Дайте свой ответ в виде строки, соответствующей "odd"или"even".
//Если входной массив пуст, считайте его следующим образом: [0](массив с нулем).

function oddOrEven(array) {
  //enter code here
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    let elem = array[i];
    sum += elem;

  }
  if (sum % 2 === 0){
    return('even');
  } else {
    return('odd');
  }
}
console.log(oddOrEven([1,2]))


function oddOrEven(array) {
    return array.reduce( function (sum, item) { 
      return sum + item 
    }, 0)% 2 == 0 ? 'even': 'odd';
}
console.log(oddOrEven([4]))




// В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля с помощью условного оператора if. 
// Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание. 
// Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».


const password = 'qazz-';

// if (password.length > 4 && password.length === '_' || password.length === '-'){
//   console.log('Correct password!')
// } else {
//   console.log('Invalid password!')
// }

//Варианот с оператором indexOff  и тернарным оператором
((password.indexOf('_') || password.indexOf('-')) && password.length > 4) ? console.log('Correct password!') : console.log('Invalid password!');

// В переменных userName, userSurname даны имя и фамилия пользователя. При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно. 
// Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы). 
// Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или 
// «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.


let name = 'Alex';
let surName = 'Chernov';
let firstStr1 = name.substring(0,1).toUpperCase();
let firstStr2 = surName.substring(0,1).toUpperCase();

let lastStr1 = name.substring(1).toLowerCase();
let lastStr2 = surName.substring(1).toLowerCase();

let strName = firstStr1 + lastStr1;
let strSurName = firstStr2 + lastStr2;



// if (name[0] != firstStr1 && surName[0] != firstStr2){
//   strName += firstStr1 + lastStr1;
//   strSurName += firstStr2 + lastStr2;
//   console.log(`Имя ${strName} и фамилия ${strSurName} были преобразованы `);
// } else {
//   console.log('Имя и фамилия остались без изменений');
// }


(name[0] != firstStr1 && surName[0] != firstStr2) ? console.log(`Имя ${strName} и фамилия ${strSurName} были преобразованы `) : console.log('Имя и фамилия остались без изменений');



// В переменной number записано число. Необходимо с помощью console.log вывести сообщение, указывающее на чётность или нечётность числа.
let number = 4;
(number % 2 == 0) ? console.log('Чётное чилсо') : console.log('Не четное число');




// Вам будет предоставлен массив чисел. 
// Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.


function sortArray(array) {
  // Return a sorted array.

  const odds = array.filter(item => item % 2).sort((a,b) => a- b);
  console.log(odds); // созданный НОВЫЙ массив НЕ четных чисел
  return array.map((item) => (item % 2) ? odds.shift() : item) // т.е. формируется новый массив с условием если элемент 
                                                               //НЕ четныйб тогда из массива не четных чисел удаляется не четное число и возвращает его в результат т.е. в array
}
let arr = [ 2, 8, 6 ];

console.log(sortArray(arr));


// Напишите генератор массивов длиной count со случайными числами от n до m. 
// Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m. Выведите результат с помощью console.log.

let n = 0;
let m = 90;
let count = 60;
let arr = [];

// for (let q = n; q < count; q++){
//   arr.push(Math.round(Math.random() * m));
// }
// arr.sort((a,b) => a - b);

while (n < count){
  n++;
  arr.push(Math.round(Math.random() * m));
}

console.log(arr);


// С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».
let str = 'Hello world!';
let newStr = '';

// for (let i = str.length - 1; i >= 0; i--){
//   newStr += str[i];
// }

let i = str.length - 1;
while (i >= 0){
  --i;
  newStr += str[i];
}

console.log(newStr);


// Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то это мина. 
// Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на следующий участок дороги (следующий элемент массива). 
// При передвижении выводить в консоль сообщение «танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, то нужно вывести сообщение «танк повреждён», 
// если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. После 2-го взрыва танк считается уничтоженным и прекращает движение.

const roadMines = [true, true, false, true, true, true, true, true, true, false];
let damage = 2;

for (let i = 0; i < roadMines.length; i++){
  let position = i + 1;
  if (roadMines[i] === true){
    console.log(`Танк переместился на ${position}`);
  } else if (damage > 1){
    damage--;
    console.log(`Танк повреждён на ${position}`)
  } else {
    damage--;
    console.log(`Танк уничтожен на ${position}`);
    break;
  }
}


// Сгенерировать массив чисел 1–31 включительно (числа месяца). Вывести с помощью console.log для каждого из чисел строку ${число} января, ${день недели}. 
// День недели 1 января должен задаваться с помощью переменной, то есть программа должна корректно работать для любого дня недели, с которого начинается месяц. 
// Подсказка 1: для дней недели можно создать массив с названиями дней, чтобы обращаться к нему по индексу. 
// Подсказка 2: индекс дня недели можно вычислить с помощью операции остатка от деления.



let numMonth = [];
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let day = 'Четверг';
let indexOfWeek = days.indexOf(day);

for (k = 1; k < 32; k++){
  numMonth.push(k);
}
for (let num of numMonth){
  let ind = (indexOfWeek + num - 1) % 7
  console.log(`${num} января, ${days[ind]}`);
}


// Ребенок играет с мячом на n-м этаже высокого здания. Высота этого этажа, h, известна.
// Он бросает мяч из окна. Мяч отскакивает (например) до двух третей его высоты (отскок 0,66).
// Его мать смотрит в окно на 1,5 метра от земли.
// Сколько раз мать будет видеть, как мяч проходит перед ее окном (в том числе, когда он падает и подпрыгивает?
// Три условия должны быть выполнены для действительного эксперимента:

// Параметр с плавающей запятой "h" в метрах должен быть больше 0
// Параметр с плавающей точкой "bounce" должен быть больше 0 и меньше 1
// Параметр "window" должен быть меньше h.
// Если все три вышеуказанных условия выполнены, вернуть положительное целое число, в противном случае вернуть -1.

function bouncingBall(h, bounce, window) {
  let ct = 1;
  if(h > 0 && window < h && bounce > 0 && bounce < 1){
  while(bounce*h > window){ //Шар может быть виден только в том случае, если высота отскакивающего шара больше, чем параметр окна.
    ct+=2;
    h*=bounce;  
    console.log(h);
  }
    return ct;
  } else {
    return -1;
  }
}


function bouncingBall(h,  bounce,  window) {
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window >= h){
    return -1;
  }

  let newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}


  //console.log(bouncingBall(3.0, 0.66, 1.5)); //3
  console.log(bouncingBall(5.0, 0.66, 1.5)); //15


  // Ваши одноклассники попросили вас скопировать для них некоторые документы. Вы знаете, что есть "n" одноклассников, а в документах есть "m" страниц.

  // Ваша задача - подсчитать, сколько пустых страниц вам нужно. Если n < 0или m < 0вернуть 0.


  function paperwork(n, m) {
    if (n > 0 && m > 0){
      return n * m
    } else {
      return 0
    }
  }



  // Учитывая массив (arr) в качестве аргумента, завершите функциюcountSmileys, которая должна вернуть общее количество улыбающихся лиц.

  // Правила для улыбающегося лица:
  
  // Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть помечены как :или ;
  // У смайлика может быть нос, но это необязательно. Допустимыми символами для носа являются -или ~
  // У каждого улыбающегося лица должен быть улыбающийся рот, который должен быть отмечен либо )или D
  // Никакие дополнительные символы не допускаются, кроме упомянутых.
  
  // Допустимые примеры смайликов: :) :D ;-D :~)
  // Недопустимые смайлики: ;( :> :} :]

  function countSmileys(smileys) {
    let firstStep = smileyHasValidEye;
    return smileys.filter(smiley => {
      let state = firstStep;
      for (let s of [...smiley]) {
        state = state(s);
        if (typeof state !== 'function') return state;
      }
    }).length;
  }
  
  function smileyHasValidEye(s) {
    if (s === ':' || s === ';') {
      return smileyHasValidNose;
    }
    return smileyHasValidEye;
  }
  
  function smileyHasValidNose(s) {
    if (s === '-' || s === '~') {
      return smileyHasValidMouth;
    }
    return smileyHasValidMouth(s);
  }
  
  function smileyHasValidMouth(s) {
    if (s === ')' || s === 'D') {
      return true;
    }
    return false;
  }



  function countSmileys(arr) {
    let smileys = 0;
    let validSmileys = [":D", ";D", ":)", ";)", ":-D", ";-D", ":-)", ";-)", ":~D", ";~D", ":~)", ";~)"];
    for (let i = 0; i < arr.length; i++) {
      if (validSmileys.includes(arr[i])) {
        smileys++;
      }
    }
    return smileys;
  }
  
  console.log(countSmileys([':~(', ':>', ':D', ':(', ':o>', ':)']));


  // Основная идея состоит в том, чтобы подсчитать все встречающиеся символы в строке. Если у вас есть строка like aba, то результат должен быть {'a': 2, 'b': 1}таким .

  // Что делать, если строка пуста? Тогда результатом должен быть пустой литерал объекта, {}.

  function count (string) {  
    // The function code should be here
    let result = {};
    let length = string.length;

    for (let i = 0; i < length; i++) {
      const char = string[i];
      if ((!result[char])) result[char] = 0;
      result[char]++;
    }
    return result;
    //  return {};
  }
  console.log(count('abac'));



// Ваша задача - отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число - позиция, которую должно занимать слово в результате.

// Примечание: числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (а не 0).

// Если входная строка пуста, верните пустую строку. Слова во входной строке будут содержать только действительные последовательные числа.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""
let str = "4of Fo1r people g3ood th5e the2";

// function order(words){
//   // ...
//   if (words === ''){
//     return ''
//   }
//   let newArr = words.split(' ');
//   const mainArr = newArr.sort((a,b) => a.match(/[1-9]/gi) - b.match(/[1-9]/gi));
//   const result = mainArr.join(' ');
//   return result;

// }


function order(words){
  let array = words.split(' ');
  let newArrSorted = [];
  for (let i = 0; i <= array.length; i++){
    console.log(array[i])
    for (let j = 0; j < array.length; j++){
      if (array[j].indexOf(i) >= 0){
        newArrSorted.push(array[j]);
        console.log(newArrSorted);
      }
    }
  }
  return newArrSorted.join(' ');
}


console.log(order(str))




