//Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл
// function func(arr) {
// 	console.log(arr[0]);
// 	arr.splice(0, 1);
// 	if (arr.length > 0) {
// 		func(arr);
// 	}
// }
// let newArr = [2,3,4,1,7,4,9];
// func(newArr);


// function numbers(n){
//   let str = String(n).split('');
//   let result = 0;
//   for (let i = 0; i < str.length; i++){
//     result += Number(str[i]);
//     console.log(result);
//   }
//   if (result > 9){
//     numbers(result);
//   } else { 
//     console.log(result);
//   }
// }
// numbers('4278531');

// рекурсия
// function recursion(num) {
// 	if (num === undefined){
// 		num = 2;
// 	}

// 	return num * num;
// }
//либо второй вариант
// function recursion(num) {
// 	num = num  || 2;
// 	return num * num;
// }
// function recursion(num, num2, num3) {
// 	num3 = num3 || 3;
// 	num2 = num2 || 2;
// 	return num * num;
// }

// console.log(recursion());


let arr = [1,2,3,4,5];

last(arr);

function last(arr){
	document.write(arr.pop() + '<br>');

	if(arr.length != 0){
		last(arr);
	} else {
		document.write('Array complited!');
	}
}





































