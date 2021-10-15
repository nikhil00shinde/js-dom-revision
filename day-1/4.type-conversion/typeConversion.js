// converting one datatype to another
// there are 2 conversion - implicit and explicit
//implicit - apne aap convert hota hain
//explicit - khud type cast krke convert krna

(function () {
	if ((-100 && 100 && "0") || [] === true || 0) {
		console.log(1);

		if ([] || (0 && false)) {
			console.log(2);
		}

		if (Infinity && NaN && "false") {
			console.log(3);
			if ("") {
				console.log(4);
			}
		} else {
			console.log(5);
			if (({} || false === "") && !(null && undefined)) {
				console.log(6);
			}
		}
	}
})();

// 1
// 2
// 5
// 6
