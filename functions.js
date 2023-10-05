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