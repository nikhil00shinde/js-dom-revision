// Creation of a new promise

// It is a wrapper around a task which on completion gives a value

//the function passed in promise can be ASYNC or SYNC

//passes by wrapper or promise to the function -> resolve and reject
// apne kaam karte hi call either resolve or reject

                           //it is task
let promise = new Promise(function (resolve, reject) {
	setTimeout(function () {

        // reject("kaam nhi hooya")
		resolve("kaam hogya 0");
		// resolve("kaam hogya 1"); //ignore
		// resolve("kaam hogya 2");  //ignore

	}, 2000);
});


//Consumers -> then; catch; finally

//when resolve call toh then chalega
// promise.then(function(val){
//     console.log(val);
// })

//when reject call toh catch chalega
// promise.catch(function(val){
//     console.log(val);
// })


//finally -> then se pehle chalta hain
        //-> koi value nhi milti hain, milti hain par voh aage pass kar deta hain
        //->use for cleanup

promise.finally(function(){
    console.log("finally was called");
}).then(function(val){
    console.log(val);
})