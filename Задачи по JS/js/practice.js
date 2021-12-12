// for (let i = 1; i <= 100; i++){
// 	document.write(i + '<br>');
// }

// for (let i = 100; i > 0; i--){
// 	document.write(i + '<br>');
// }

// for (let i = 1; i <= 100; i++){
// 	if (i % 2 == 0){
// 		document.write(i + '<br>');
// 	}
// }

// let arr = [];
// for (let i = 0 ; i < 10; i++){
// 	// arr.push('x');
// 	arr[i] = 'x';
// }
// console.log(arr);


// let arr = [];
// for (let i = 1; i <= 10; i++){
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 10; i++){
// 	arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 10; i++){
// 	arr.push(Math.round(Math.random() * 10) + 1);
// }
// console.log(arr);

// let arr = [9,2,3,-1,14];
// for (let i = 0; i < arr.length; i++){
// 	if (arr[i] > 0 && arr[i] < 10){
// 		document.write(arr[i] + '<br>');
// 	}
// }
// let arr = [9,2,3,5,14];
// for (let i = 0; i < arr.length; i++){
// 	if (arr[i] == 5){
// 		console.log('Есть');
// 		break;
// 	}
// }

// let arr = [9,2,3,5,14];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
// 	result += arr[i];
// }
// console.log(result);

// let arr = [9,2,3,5,14];
// let result = 0;
// for (let i = 0; i< arr.length; i++){
// 	result += arr[i] * arr[i];
// 	result += Math.pow(arr[i],2);
// }
// console.log(result);

let arr = [9,2,3,5,14];
let result = 0;
for (let i = 0; i < arr.length; i++){
	result += arr[i];
}
let newRes = result/arr.length;
console.log(newRes);









