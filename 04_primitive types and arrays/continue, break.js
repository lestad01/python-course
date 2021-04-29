// колода
// let cards = ['2', 'Король', 'Туз', '5', '6', 'Король', 'Дама'];
// //карты в руке
// let hand = [];

// for (let card of cards) {
//   // выполняем только для нечетного индекса
//   if (card !== 'Король' && card !== 'Туз') continue;
//   hand.push(card);
//   console.log('Карта' + card + ' добавлна в руку');
// }

// console.log('Карты в руке ', hand);


// break

let cards = ['2', 'Король', 'Туз', '5', '6', 'Дама','Король'];

console.log('Ищем даму в колоде...');

let found = false;

for (let card of cards) {
  console.log(`Из колоды вытянута карта ${card}`);
  if (card === 'Дама') {
    found = true;
    break;
  }
}

console.log(found ? 'Мы нашли даму!' : 'В колоде нет дам :(');
