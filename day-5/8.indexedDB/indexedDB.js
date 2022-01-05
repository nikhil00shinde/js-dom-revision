// indexedDB -> works on transaction
// transaction is process which tell indexedDB mei konsi collection ke sath baat kar rahe and karna kya hain readonly/readwrite

let request = indexedDB.open("employees", 1); //collection name,version

// on request we have 3 event listener

let db;

request.addEventListener("success", () => {
	db = request.result;
});

request.addEventListener("error", () => {});

// database create hota hai ya fir version change(increment) hota hain
// tab jakr upgrade event chlta
// agr upgrade event call hota hai iske baad hi success event hoga
request.addEventListener("upgradeneeded", () => {
	// is event ke listener me jake hum apne collection bna sakte hai

	let db = request.result;
	db.createObjectStore("companyData", { keyPath: "eId" });
});

function addEmployee(name, add, phone) {
	let tx = db.transaction("companyData", "readwrite");
	let store = tx.objectStore("companyData");

	store.add({
		eId: Date.now(),
		name,
		address: add,
		phoneNo: phone,
	});
}

let nameInput = document.querySelector("[placeholder='Name']");
let addInput = document.querySelector("[placeholder='Address']");
let phoneInput = document.querySelector("[placeholder='Number']");

let submitBtn = document.querySelector(".submit");
let viewBtn = document.querySelector(".view");

submitBtn.addEventListener("click", function () {
	let name = nameInput.value;
	let add = addInput.value;
	let phone = phoneInput.value;
	addEmployee(name, add, phone);
});

function viewEmployees() {
	let tx = db.transaction("companyData", "readonly");
	let store = tx.objectStore("companyData");

	let req = store.openCursor();

	let sNo = 1;
	let tbody = document.querySelector("tbody");
	let table = document.querySelector("table");

	table.style.display = "block";

	req.addEventListener("success", function () {
		let cursor = req.result;

		if (cursor) {
			console.log(cursor.value);

			let tr = document.createElement("tr");
			tr.innerHTML = `
      <td>${sNo}</td>
      <td>${cursor.value.name}</td>
      <td>${cursor.value.address}</td>
      <td>${cursor.value.phoneNo}</td>
      `;

			tbody.append(tr);
			sNo++;
			cursor.continue();
		}
	});
}

viewBtn.addEventListener("click", function () {
	viewEmployees();
});
