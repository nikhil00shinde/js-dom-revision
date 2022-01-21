let words = ["spray", "limit", "elite", "exurberant", "destruction"];
// I want to get word whose char len is greater than 6

// let narr = [];
// for (let i = 0; i < words.length; i++) {
// 	let word = words[i];
// 	if (word.length > 6) {
// 		narr.push(word);
// 	}
// }
// console.log(narr);

////////////filter
let narr = words.filter(function (el) {
	// console.log(el);
	return el.length > 6;
});
console.log(narr);
