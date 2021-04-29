// по счётчику

for (let i =0; i < 10; ++i) {
  console.log(i);
}

// для заполненияфы массива по счетчику
let a = [];

for (let i =0; i < 10; ++i) {
  a.push(i * i);
}

// Заполнение массива на основе значений др массива
let b = [];
for (let pow2 of a) {
  b.push(pow2 / 2);
}

// Заполнение пустого массиван а основе др данных (длина массива неизвестна)
let lines = [];
let next;
while (next = file.nextLine()) {
  lines.push(next);
  console.log(lines);
}


//Обрабортка значений  массива
for (let line of lines) {
  console.log('Длина строки', line.length);
}

//Обработка индексов массива
for (let number in lines) {
    console.log(`Длина строки №${number}: ${lines[number].length}`);
}

// Обработка значений или индексов массива в обратном порядке
let aReversed = [];
for (let i = a.length - 1; i >= 0; --i) {
  aReversed.push(a[i]);
}

//Сложная логика выхода из цикла
let currentAttempt = 0;
while (currentAttempt++ < 1000) {
  if (crayfishWistles()) break;
}

// Обработка нескоьких масивов одинаковой длины

for (let i in a) {
  console.log(a[i] + aReversed[i]);
}
for (let i =0; i < a.length; ++i) {
  console.log(a[i] + aReversed[i]);
}

//Цикл со счётчиком и сложной логикой изменения значения счётчика
for (let x = 0; x < 100; x += Math.round(Math.random() * 5)) {
  console.log(x);
}
