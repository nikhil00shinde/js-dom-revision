async function f() {
	let res = await fetch("https://jsonplaceholder.typicode.com/posts");

	let json = await res.json();

	console.log(json);
    console.log(3);
}
console.log(1);

f();  //this function is async function 

console.log(2);
