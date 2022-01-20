import React, { useEffect, useState } from "react";

// It will run after every render
export default function Ue1() {
	useEffect(() => {
		console.log("useEffect");
		document.title = `Clicked ${count} times`;
	});
	console.log("render");
	const [count, setCount] = useState(0);
	return (
		<div>
			{console.log("check")}

			<p>You clicked the button {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
}
