// App chahte ho ki aapko banaya hooya function har array ke pass available ho

Array.prototype.myFunction = function () {
	console.log(this);
	//this -> jis array se call kiya woh hain this
};

let a = [1, 2, 3];
a.myFunction();
