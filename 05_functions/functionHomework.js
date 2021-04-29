
//first task
let defaultValueFirst = ['les01@mail.ru','pupkin@inbox.ru', 'pfka-lendo@inbox.ru' ];
let blackListFirst = ['pfka-lendo@inbox.ru'];


const validValue = defaultValueFirst.filter(i => blackListFirst.indexOf(i) === -1);

console.log(`Валидное значение: ${validValue}`);
//
//
function findValidValue (defaultValue, blackList = ['lestad01@mail.ru', 'les01@mail.ru']) {
  let conclusion = [];
    for (let piece of defaultValue) {
        if (!blackList.includes(piece)) {
          conclusion.push(piece);
        }
    }
    return console.log(conclusion);
}
let n = ['les01@mail.ru','pupkin@inbox.ru', 'pfka-lendo@inbox.ru', 'pfka-lendoasd@inbox.ru']
findValidValue(n);


// second task
function calculateCostBasket (costBasket, amountGoods, promoCode = null) {
  if ('ДАРИМ300' === promoCode) {
    totalCost = costBasket - 300;
  } else if (promoCode === 'ДАРИМ300' && costBasket < 300) {
     totalCost = 0;
    console.log('Стоимость корзины товаров составляет ' + totalCost);
  }
  if (amountGoods >= 10) {
    let fiveProcentDisc = costBasket / 5;
    totalCost = costBasket - fiveProcentDisc;
    console.log('Стоимость корзины товаров, при условии, что в корзине более 10 товаров составляет ' + totalCost);
  }
  if (costBasket > 50000) {
    let difference = costBasket - 500000;
    let twentyProcDisc = difference / 20;
    totalCost = costBasket - twentyProcDisc;
    console.log('Стоимость корзины товаров со скидкой 20% составляет ' + totalCost);
  }
  if ('СКИДКА15' === promoCode && costBasket >= 20000) {
    let fiftyProcDisc = costBasket / 15;
    totalCost = costBasket - fiftyProcDisc;
    console.log(' Стоимость корзины товаров со скидкой 15% составляет ' + totalCost);
  }
}
calculateCostBasket (19000, 10, 'ДАРИМ300');
