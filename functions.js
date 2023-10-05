"use strict";

function showFirstMessage () {
	console.log("Hello world!");
}

showFirstMessage();

const calc = function (a, b) {
	return a + b;
};

const del = (c, d) => {
	return c * d;
};
console.log(del(5, 6));


const currUsdt = 38.8;
const discount = 0.8;

const convert = (value, amount) => {
	console.log("Проміжний результат: " + value * amount);
	return value * amount;
};
const newConvert = (result) => {
	console.log("Результат зі скидкою: " + result * product);
};
const product = convert(500, currUsdt);
newConvert(discount);