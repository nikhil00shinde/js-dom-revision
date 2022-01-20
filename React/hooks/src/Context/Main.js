import React, { useState } from "react";
import Demo from "./Demo";
import MyContext from "./Context";

function Main() {
	console.log("Render");
	const [count, setCount] = useState(0);
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click
			</button>
			<MyContext.Provider value={count}>
				<Demo />
			</MyContext.Provider>
		</div>
	);
}

export default Main;
// Provider value provide karta hain sabko, jo baar change na ho
// useContext ek type of subscription hain jo,value change hone par component re-render karta hain
