// Write a function which takes n number as an argument and return their sum

function f() {
	let sum = 0;
	for (let x in arguments) {
		sum += arguments[x];
	}
	return sum;
}

console.log(f(1, 2, 3));
console.log(f(1));
console.log(f(110, 22, 3, 12, 9, 3, 4, 3, 12, 1, 12, 3));
