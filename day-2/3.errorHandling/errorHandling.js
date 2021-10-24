let fs = require("fs");

try {
	fs.readFileSync("a.txt");
} catch (err) {
	// error comes in object form
	console.log(err.message);
}
