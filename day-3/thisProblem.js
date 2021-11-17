"use strict";

let obj = {
	name: "Rahul",

	f: function () {
		//the first solution ye hain ki convert kardo g function ko arrow function mei, kyuki arrow function ka khudka this nhi hota hain ,voh lexical context se udhta hain matlab voh apne parent se udhta hain
		let g = () => {
			//using this keyword I want to access properties of obj inside g
			console.log(this);
		};
		g();
	},
};

obj.f();
