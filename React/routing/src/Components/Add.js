import React from "react";

export default function Add(props) {
	console.log("Add ", props);
	return (
		<div>
			<h1>ADDITION</h1>
			<button onClick={() => props.history.push("/sub")}>Go to Sub</button>
		</div>
	);
}
