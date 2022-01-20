import React, { useEffect, useState } from "react";
import "./Ue3.css";

// 3rd variation
// non empty array k andhar
// dependency array k andhar
// the value that we passs
// only when they change useEffect runs

function Ue3() {
	console.log("render");
	const [count, setCount] = useState(0);
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		console.log("useEffect");
		document.title = `Clicked ${count} times`;
	}, [count]);

	return (
		<div className={darkMode ? "view dark-mode" : "view"}>
			<label htmlFor="dark mode">DarkMode</label>
			<input
				type="checkbox"
        id="dark mode"
				checked={darkMode}
				onChange={() => {
					setDarkMode(!darkMode);
				}}
			/>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				{count}
			</button>
		</div>
	);
}

export default Ue3;
