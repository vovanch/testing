"use strict";

const arr = [1, 3, 2, 4, 7, 9, 11];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
	return a - b;
}
/*arr.forEach(function(item, i, arr){
	console.log(`${i}: ${item} всередині масиву ${arr}`);
});*/
//arr.pop();
//arr.push(15);

/*for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);   
}*/

/*for (let value of arr) {
	console.log(value);
}*/

const str = prompt("Введіть ваші товари:", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));