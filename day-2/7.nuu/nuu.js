// null vs undefined vs undeclared

// UNDEFINED => variable ki value jisko apney declare kra but initialize nhi kara

// you have declare something but no value exists

let a;
console.log(a);

// NULL  => value,empty value
let b = null;
console.log(b);
console.log(typeof b);
// null is typeof object but it's signifies an empty value

// UNDECLARED => variable without declaration
c = 2;
// undeclared variable exists in gloabal object
console.log(global.c); //nodejs
console.log(window.c); // window
