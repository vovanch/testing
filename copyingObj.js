"use strict";

function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 8,
		y: 11
	}
};

const newNumbers = copy(numbers);

newNumbers.b = 34;

console.log(numbers);
console.log(newNumbers);

const add = {
	d: 14,
	e: 34
};

const newObj = Object.assign({}, add);
console.log(newObj);

const oldArr = ["a", "b", "c"];
const newArr = oldArr.slice();

newArr[1] = "Hi";
console.log(oldArr);
console.log(newArr);

const video = ["youtube", "vimeo", "twitch"],
	  blogs = ["instagram", "facebook", "threads"],
	  internet = [...video, ...blogs, "tg", "meta"];

console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}

const num = [3, 4, 8];
log(...num);


const array = ["a", "b"];
const newArray = [...array];
const q = {
	one: 1,
	two: 2
};
const newQ = {...q};
newQ.one = 3;
console.log(q);
console.log(newQ);