// function first argument is string that can be 'a' or 'm'
// if it is 'a' then add the all other arguments and return answer
// if it is 'm' then multilply the all other arguments and return answer

function f(flag) {
	let ans = 0;
	if (flag === "a") {
		let sum = 0;
		for (let x = 1; x < arguments.length; x++) {
			sum += arguments[x];
		}
		ans = sum;
	} else if (flag === "m") {
		let mul = 1;
		for (let x = 1; x < arguments.length; x++) {
			mul *= arguments[x];
		}
		ans = mul;
	}
	return ans;
}

console.log(f("a", 1, 2, 3, 4, 5));
console.log(f("m", 1, 2, 3, 4, 5));
