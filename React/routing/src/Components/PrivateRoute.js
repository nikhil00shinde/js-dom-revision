import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
	console.log(Component);
	console.log(rest);

	return (
		<Route
			{...rest}
			render={(props) => {
				return <Component {...props} isAuth={true} />;
			}}
		></Route>
	);
}
