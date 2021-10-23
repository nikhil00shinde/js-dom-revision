let fs = require("fs");

let buffer = fs.readFileSync("object.json");

let stringObj = buffer.toString();

let obj = JSON.parse(stringObj);
console.log(obj);
function flattenObj(obj, parent, res = {}) {
	for (let key in obj) {
		let name = parent ? parent + "_" + key : key;
		if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
			flattenObj(obj[key], name, res);
		} else {
			res[name] = obj[key];
		}
	}
	return res;
}

let newObj = flattenObj(obj, "");

fs.writeFileSync("object.json", JSON.stringify(newObj));
