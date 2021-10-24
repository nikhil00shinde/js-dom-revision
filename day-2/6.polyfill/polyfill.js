// polyfill voh function  aur voh functionality hain hoti hain joki  kuch browser mei exist nhi karti and aap khud create karte ho taki voh functionality sare browser mei exists karne shuru karde

// A polyfill is a piece of code (usually JS on the web) used to provide modern functionality on older browser that do not natively support it.

// All browser do not use same JS
// All browser company write  their own JS engine
// JS engine different for all browser

Array.prototype.myFilter = function (cb) {
	let ans = [];
	for (let val in this) {
		if (cb(this[val])) {
			ans.push(this[val]);
		}
	}
	return ans;
};

let a = [1, 2, 3, 4, 5, 6];

function isEven(x) {
	return x % 2 == 0;
}

let returnedArr = a.myFilter(isEven);
console.log(returnedArr);
