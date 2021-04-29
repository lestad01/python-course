let fruits = ["apple", "banano", "pear", "mango"];

console.log("Сегодня я съел");

for (let fruit of fruits){
  console.log(fruit);
}

let raiting = ["Катя", "Сашко", "Мария", "Леся"];

console.log('Рейтинг студентов');

for (let i in raiting){
  console.log(`${parseInt(i) + 1} место: ${raiting[i]}`);
}
