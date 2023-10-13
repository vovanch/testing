"use strict";

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	color: {
		border: "black",
		bg: "red"
	},
	makeTest: function(){
		console.log("Test");
	}
};
options.makeTest();

const {border, bg} = options.color;
console.log(border);

console.log(Object.keys(options).length);

//delete options.name;
//console.log(options);
let counter = 0;
for (let key in options) {
	if (typeof(options[key]) === "object") {
		for (let i in options[key]) {
			console.log(`Властивість ${i} має значення ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Властивість ${key} має значення ${options[key]}`);    
		counter++;
	}
}
console.log(counter);