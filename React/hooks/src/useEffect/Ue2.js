import React, { useEffect, useState } from "react";
// 2nd variation
// ComponentDidMout
// there is presence of dependency array
// empty dependency array

export default function Ue2() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		console.log("useEffect");
		document.title = `Clicked ${count} times`;
	}, []);

	console.log("render");
	return (
		<div>
			<p>You clicked the button {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
}
