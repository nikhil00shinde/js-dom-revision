let a = {
	name: "Rahul",
	age: 16,
	address: {
		city: "Delhi",
		zip: 110001,
	},
	arr: [1, 2, 3, 45],
};

function deepCopy(a) {
	let ans = {};
	for (x in a) {
		if (Array.isArray(a[x])) {
			ans[x] = deepCopy(a[x]);
		} else if (typeof a[x] === "object") {
			ans[x] = deepCopy(a[x]);
		} else {
			ans[x] = a[x];
		}
	}
	return ans;
}
let b = deepCopy(a);
a.address.city = "Nashik";
a.arr[3] = 4;

console.log(a);
console.log(b);
