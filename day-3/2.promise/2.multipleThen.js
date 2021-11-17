let p = new Promise(function (reslove, reject) {
	setTimeout(function () {
		reslove("kaam hogya");
	}, 2000);
});


p.then(function(val){
    console.log(1);
    console.log(val);
})

p.then(function(val){
    console.log(2);
    console.log(val);
})

p.then(function(val){
    console.log(3);
    console.log(val);
})

//code top down chalta hain, jis order mei then register hooya hain usi order mei code execute hoga