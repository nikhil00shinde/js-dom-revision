// Number conversion

let s = "10";
console.log(s + 2); // String concatenation

//explicit
console.log(Number(s) + 2); // number addition

// implicit
console.log(s - 2);

s = "abc";
console.log(s - 2); //NaN

// Undefined ke sath koi bhi mathematical operation kato aapko NaN milega

console.log(Number(undefined)); // -> NaN
console.log(Number(null)); //-> 0
console.log(Number(true)); //-> 1
console.log(Number(false)); //-> 0
console.log(Number("true")); //-> NaN

//remove spaces
s = " 9  ";
console.log(Number(s));

//Falsy value -> koi bhi 0 -> 0,-0,0n
//            -> empty string, null , undefined
//            -> NaN

// Truthy Value -> non-empty string
//              -> empty object and empty arr
//              -> all number number other than o
//              -> Date
