import React from "react";
import styleWrapper from "./styleWrapper";

function Button(props) {
	console.log(props);

	return (
		<div>
			<button style={props.styles}>This is a button</button>
		</div>
	);
}

export default styleWrapper(Button);
