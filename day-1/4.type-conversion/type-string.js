let n = 10;
console.log(typeof n);



// BOTH array and object show typeof object
let a = {};
console.log(typeof a);

let b = [1];
console.log(typeof b);


// Object to string -> implicitly
// alert()
// it we pass something inside it's implicitly typecast it to string
// alert(a); -> [object Object]

// Object to string -> explicitly
console.log(String(a))




// Interview question
console.log(typeof typeof typeof typeof typeof true)