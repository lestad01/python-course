function freet(who = 'незнакомка') {
  console.log(`hello, ${who}`);
}
freet('Moto');
freet();

// 2 аргумента
// при этом 2 аргумент имеет значение по умолчанию
function findCard (cards, wantedCard = 'туз') {
  console.log(' Ищем в колоде карту ' + wantedCard);
  let found = false;

  for (let card of cards) {
    console.log(`Из колоды вытянута карта ${card}`);
    if(card === wantedCard)
    found = true;
    break;
  }

  console.log(found ? `Мы нашли карту ${wantedCard} !` :
  `В колоде карты ${wantedCard} нет`);
}

let MyCards = ['2', 'Король', '6', '5', 'Туз'];

//ищем туза в переданной колоде карт
findCard(MyCards, '4');
findCard(MyCards);