// let a = [1, 2, 3, 4, 5, 5, 6, 7];

let a = ["this ", "is ", "a ", "string"];

// Map =>loop mara array ke har ek element par and function call kiya

// function double(x) {
// 	return 2 * x;
// }

// let returnedArr = a.map(double);
// console.log(returnedArr);

// filter bolta hai aap muje ek function do joki ek condition check krta ho
// and based on that condition muje true ya false deta ho

// function isEven(x) {
// 	return x % 2 == 0;
// }

// let returnedArr = a.filter(isEven);
// console.log(a);
// console.log(returnedArr);

// function add(x, y) {
// 	return x + y;
// }

// let returnedVal = a.reduce(add);
// console.log(returnedVal);

// REDUCE

let users = [
	{ name: "John", age: 34 },
	{ name: "Amy", age: 20 },
	{ name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

// .reduce(function (previousValue, currentValue) {
// 	return previousValue + currentValue.x;
// }, initialValue);

 users = [
	{ name: "John", age: 34 },
	{ name: "Amy", age: 20 },
	{ name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
	obj[user.name] = user.age;
	return obj;
}, {});
console.log(usersObj);
