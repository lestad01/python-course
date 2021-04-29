function findCardIndex (cards, wantedCard = 'Туз') {
  console.log(' Ищем в колоде карту ' + wantedCard);
  for (let index in cards) {
    let card = cards[index];
    console.log(`Из колоды вытянута карта ${card}`);
    if(card === wantedCard) {
      console.log(`Мы нашли карту ${wantedCard}`);
      return index;        // foundIndex = [index];
                // return foundIndex;   // break;
    }
   
  }
  console.log(`В колоде карты ${wantedCard} нет`);

  return -1;
}
let MyCards = ['2', 'Король', '6', '5', 'Туз'];


let aceIndex = findCardIndex(MyCards);
let jackIndex = findCardIndex(MyCards,'Дама');


console.log(aceIndex);
console.log(jackIndex);