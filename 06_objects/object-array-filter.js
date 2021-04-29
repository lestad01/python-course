function arrFilter(obj, property, value){
  for ( let k in obj) {
    if (obj[k] [property] === value){
      newObjects.push(obj[k]);
    }
  }
  return newObjects;
}

console.log(arrFilter(objects, 'Name', 'Пётр'));