// Counter using useReducer

import React, { useReducer } from "react";

const ACTIONS = {
	INCREMENT: "increments",
	DECREMENT: "decrements",
	RESET: "reset",
};

function reducer(count, action) {
	switch (action.type) {
		case ACTIONS.INCREMENT:
			return count + 1;

		case ACTIONS.DECREMENT:
			return count - 1;

		case ACTIONS.RESET:
			return 0;

		default:
			return count;
	}
}

function Reducer() {
	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<span>{count}</span>
			<button
				onClick={() => {
					dispatch({ type: ACTIONS.INCREMENT });
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					dispatch({ type: ACTIONS.DECREMENT });
				}}
			>
				-
			</button>
			<button
				onClick={() => {
					dispatch({ type: ACTIONS.RESET });
				}}
			>
				Reset
			</button>
		</div>
	);
}

// Counter using useState

// import React, { useState } from "react";

// function Reducer() {
// 	const [count, setCount] = useState(0);

// 	const add = () => {
// 		setCount(count + 1);
// 	};

// 	const minus = () => {
// 		setCount(count - 1);
// 	};

// 	const reset = () => {
// 		setCount(0);
// 	};
// 	return (
// 		<div>
// 			<span>{count}</span>
// 			<button onClick={add}>+</button>
// 			<button onClick={minus}>-</button>
// 			<button onClick={reset}>Reset</button>
// 		</div>
// 	);
// }

export default Reducer;
