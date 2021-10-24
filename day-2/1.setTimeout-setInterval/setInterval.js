// Browser => Web Apis       -- yaha se ata hain
// Nodejs => Node Apis       -- yaha se ata hain
// setInterval it is not part of js
// it is also a timer function
// setTimeout is only executes the given function once
// setTinterval it keeps executing the given function is cycles of the given period

// both setInterval as well as setTimeout takes time in milliseconds
// 1sec = 1000 millisec

let id = setInterval(function () {
	console.log("this will be printed after 2 sec");
}, 2000);

setTimeout(function () {
	clearInterval(id);
}, 4000);

// setInterval jeeta hain but is case mei setTimeout thoda jaldi chal raha hain and timer function ko destroy kar raha hain
