let computer = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  coreCunt: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
  videoCardModel: 'NVidia GeForce GTX 1080 GTI',
  videoMemory: 4096,
  ramType: 'DDR4',
  price: 228,
};

// let values = Object.values(computer);
// let keys = Object.keys(computer);
// let entries = Object.entries(computer);

// console.log('VALUES\n');

// for (let value of values) {
//   console.log(value);
// }

// console.log('\nKEYS\n');

// for (let key of keys) {
//   console.log(`${key}: ${computer[key]}`);
// }

// console.log('\nENTRIES\n');

// for (let entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);
// }

// // аналогично, но читаемо

// console.log('\nENTRIES WITH DESTRUCTING\n');

// for (let [key, value] of entries){
//   console.log(`${key}: ${value}`);
// }
// for (let key in computer){
//   if (!computer.hasOwnProperty(key)) {
//     continue;
//   }
//   console.log(computer[key]);
// // }
// let dich = typeof null;
// console.log(dich);


function getStringValue(unknown){
  if (typeof unknown === 'string'){
    return unknown;
  }
  if (typeof unknown === 'function'){
    return unknown;
  }
  if (typeof unknown === 'object'){
    return unknown.toString();
  }
  return '';
}

console.log(getStringValue('Just a string'));
console.log(getStringValue(function(){
  return new Date().getFullYear();
}));
console.log(getStringValue([1,2,3]));
console.log(getStringValue({}));
console.log(getStringValue(false));

