// First task
let n = 0;
let m = 100;
let lines = [];
let count = 100;

//два варианта через while и for

for (let i = n; i < count; i++) {
  lines.push(Math.round(Math.random() * m));
  console.log(lines.length);
}
console.log('Количество чисел ' + lines.length);
console.log(lines);
//
while ( n < count) {
  n++;
  lines.push(Math.round(Math.random() * m));
}
console.log('Количество чисел ' + lines.length);
console.log(lines);
//
//Second task
let l = "Здравствуй, молодец!";
let q = ""; // строка в обратном порядке
for (i = l.length-1; i >= 0; i--) {
    q += l[i];
}
console.log(q);
//
//Third task
let roadMines = [true, false, false, false, false, true, false, true, false, false];
let hit = 3;

for (let s = 0; s < roadMines.length; s++){
  if (roadMines[s] === false) {
    let position = s + 1;
    console.log(`Танк переместился на ${position}`);
    // hit--;
  } else if (hit > 1){
    hit--;
    console.log('Танк повреждён');
    continue;
  } else {
    console.log('Танк уничтожен');
    break;
  }
}

// Task fourth 
let numMonth = [];
let daysWeek = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let day = 'четверг';
let indexOfWek = daysWeek.indexOf(day);

for (k = 1; k < 32; k++) {
    numMonth.push(k);
}
for (num of numMonth){
  let p = (indexOfWek + num - 1) % 7;
  console.log(`${num} января, ${daysWeek[p]}`);
}




