// jo jagah hain jaha A naam function ke variable rakhe jate hain usey hum closure bolte hain

// SCOPE/CONTEXT (Closure)(Jagah)

// Closure jab khatam hoga jab B naam ka function memory se udd jayega

function A() {
	let i = 1,
		j = 2,
		k = 3;
	return function f() {
		console.log(i + j + k);
	};
}

let B = A();
// B();

// Closure -> MOST IMPORTANT USE CASE ==> for MEMOIZATION

function memoFib() {
	let memo = {};
	return function fib(num) {
		if (memo[num]) {
			return memo[num];
		} else if (num < 2) {
			return num;
		} else {
			let ans = fib(num - 1) + fib(num - 2);
			memo[num] = ans;
			return ans;
		}
	};
}

let f = memoFib();

console.log(f(2));
