function queue() {
	let arr = []; //due to closure context

	return function (op, value) {
		if (op === "insert") {
			arr.push(value);
		} else if (op === "out") {
			arr.shift();
		} else if (op === "show") {
			console.log(arr);
		}
	};
}

let f = queue();

f("insert", 10);
f("insert", 20);
f("insert", 30);
f("insert", 40);
f("insert", 50);
f("show");
f("out");
f("show");
f("insert", 60);
f("show");

// FIFO
