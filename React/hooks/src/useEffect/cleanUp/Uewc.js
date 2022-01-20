import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Uewc() {
	const [count, setCount] = useState(0);
	console.log("render c");

	useEffect(() => {
		console.log("useEffect c");
		document.title = `Clicked ${count} times`;

		// cleanup optional
		return () => {
			console.log("clean up");
			alert(`I will be called before the next useEffect is called' ${count}`);
		};
	},[]);

	let history = useHistory();
	return (
		<div>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
			<button onClick={() => history.push("/name")}>Change</button>
		</div>
	);
}

export default Uewc;
