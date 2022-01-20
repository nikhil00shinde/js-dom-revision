import React, { useEffect, useState } from "react";

export default function Infinite() {
	console.log("render");
	useEffect(() => {
		console.log("useEffect");
		let num = Math.random() * 10;
		setCount(num);
	}, []);
	const [count, setCount] = useState(0);
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
}
