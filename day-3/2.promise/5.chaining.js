fetch("")
	.then(function (res) {
		return res.json();
	})
	.then(function (json) {
		console.log(json);
	});
