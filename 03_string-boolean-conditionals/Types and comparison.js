true === true; // true
true !== true; //false
true === false; //false
true !== false; //true

"strings" === 'strings'; // true
'strings' === `strings`; //true
"strings" === `strings`; //true

"строка" === 'строка' === `строка`; //false, важен порядок вычислений
'строка1' !== 'строка2'; //true
// === и !== всегда вернёт false при сравнении значений разных типов

alert(false !== 0); //true
alert(true !== 1);//true
alert(0 !== ''); //true
alert(3 !== '3'); // вот это поворот! true
alert(false !== '');//true
alert(true !== 'true'); //true

//сравенение строк происходит мосимвольно по кодам символа, условно "по алфавиту"

'z' > 'a'; //122 > 97
'az' > 'axzzzz'; // a ===a, z > 8, дальше не проверяем
'z' > 'Z'; // 122 > 90
'10' < '5'; // вот так сюрприз
'10' > '05'; //теперь все на своих местах

//сравненеие строк и чисел
'10' > 5; //true
10 > '5'; // true
10 > 'x' // false, 'x' не число (Nan)
10 < 'x'; // false, 'x' не число (Nan)

// сравненеия с boolean всегда сводятся к сравнению чисел
// true -1 , false - 0
1 > false; // rtrue, 1 > 0
0 < true; // true, 1> 0
'10' > true; // true, 10 > 1
'1' > true; // false, 1 > 1
'1' > false; // true, 1 > 0
'x' > true; // false, NaN > 1
