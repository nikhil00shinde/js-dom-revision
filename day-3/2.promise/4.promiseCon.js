let p = new Promise(function (reslove, reject) {
	setTimeout(function () {
		reslove("kaam hogya");
	}, 2000);
});

setTimeout(function () {
	p.then(function (val) {
		console.log(val);
	});
}, 3000);


//Even if you have resolved promises, agar aap uske upar then lagte ho tab bhi voh kaam karte hain