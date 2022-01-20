import Uewc from "./useEffect/cleanUp/Uewc";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Ue1 from "./useEffect/Ue1";
import Main from "./Context/Main";
import Central from "./Context2/Central";

function App() {
	return (
		// <Router>
		// 	<Switch>
		// 		<Route path="/name">
		// 			<Ue1 />
		// 		</Route>
		// 		<Route path="/">
		// 			<Uewc />
		// 		</Route>
		// 	</Switch>
		// </Router>
		<div>
			<Central />
		</div>
	);
}

export default App;
