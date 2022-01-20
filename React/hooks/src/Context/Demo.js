import React, { useContext } from "react";
import MyContext from "./Context";
import DemoChild from "./DemoChild";
function Demo() {
	console.log("Demo Render");
	const val = useContext(MyContext);
	console.log(val);
	return (
		<div>
			<DemoChild />
		</div>
	);
}

// React.memo --> apna jo previous props and previous state hain ,voh previous iteration ke barabar hain toh usey re-render nhi karta
// React.memo --> agar function call se koi value change hooyi previous function call se toh us component ko re-render karta
// Iska useContext ka koi relation nhi hain

export default React.memo(Demo);
// Yahi ki faltu re-render na ho, agar hum useContext use nhi kar rahe hain
