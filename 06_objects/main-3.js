let obj = [
	{value: "tomAndJerry", label: "Том и Джерри"},
	{value: "scoobyDoo", label:"Скуби-Ду"},
	{value: "daffyDuck", label:"Даффи Дак"},
	{value: "woodyWoodpecker", label:"Дядел Вуди"},
	{value: "bugsBunny", label:"Багз Банни"},
]; //массив

let arr = [1, "два", 3, "четыре"]; //массив

let testObject = {
	value: "harryPotter", 
	label: "Гарри Поттер"
}; //объект

var newSelect = document.createElement('select');
document.body.appendChild(newSelect);

function createHtml (selectedValue, key1, key2) { // key1 = value, key2 = label
	var newOption = document.createElement('option');
	newOption.innerHTML = key2; //для установки или получения HTML разметки элемента
	newOption.setAttribute('value', key1);
	if (selectedValue === key1) {
		newOption.setAttribute('selected', true);
	};
	newSelect.appendChild(newOption);
	return newSelect;
}

function conversion (objects, selectedValue) {
	for (let i = 0; i < Object.keys(objects).length; i++) {
		if ((typeof objects[i] === 'number') || (typeof objects[i] === 'string')) {
			let key1 = objects[i];
			let key2 = objects[i];
			// let selectedValueDefault = objects[0];
			createHtml (selectedValue, key1, key2);
		} 
		if (typeof objects[i] === 'object') {
			let [key1, key2] = Object.values(objects[i]);
			// let selectedValueDefault = objects[0].value;
			createHtml (selectedValue, key1, key2);
		}
		if (!Array.isArray(objects)) {
			let [key1, key2] = Object.values(objects);
			// let selectedValueDefault = objects.value;
			createHtml (selectedValue, key1, key2);
			break;
		}
	}

}    
conversion (arr, "два");
console.log(conversion(arr, "два"));
// conversion (arr, "д");
conversion (obj, "scoobyDoo");
// conversion (obj, "scooby");