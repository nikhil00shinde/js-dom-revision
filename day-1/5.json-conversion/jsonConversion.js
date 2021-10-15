// JSON stringify
// => converts a js object to string

let o = {
	name: "Rahul",
};

console.log(o);

let stringWhichContainsObject = JSON.stringify(o);
console.log(stringWhichContainsObject);

// JSON Parse
// => converts a string which contains a js object back to a js object
// console.log("----------");
let fs = require("fs");

fs.writeFileSync("text.txt", JSON.stringify(o));

let buffer = fs.readFileSync("./text.txt");

console.log(buffer);

let stringVal = buffer.toString();
console.log(stringVal);
console.log(JSON.parse(stringVal));
