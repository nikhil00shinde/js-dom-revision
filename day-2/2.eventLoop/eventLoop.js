// eventloop => is a process, it keep checking ki callstack khali hain taki mei callback queue ke andhar callback functions ko execute karoo callstack pe

// Agar mera callstack khali hain,mere callback queue mei callback function bhaitha hain, toh us callback ko callstack pe le aao aur excecute kardo

// jab callstack khali nhi hota, tab tak callback queue wait karte rahega


function sayHi() {
	console.log("hi");
}

// setTimeout ek function hain, apney usey ek dusre function,
// as an argument de rakha hain
// toh is function ko callback bolte hain

function f() {
	console.log("this will greet after 2 sec");
}

setTimeout(f, 2000);

// will go to callstack get executed will be popped off
sayHi(); //synchronous function

// ek function ko dusre dete ho as argument toh dusra function CALLBACK hota hain
