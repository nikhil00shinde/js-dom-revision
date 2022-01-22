import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Add from "./Components/Add";
import Sub from "./Components/Sub";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<Router>
				{/* switch -> check for match */}
				{/* agar switch nhi hoga toh jo app ka path match krega url utne app page pe render hoge */}
				<Switch>
					{/* Agar humhe kuch prop dene hain Add ko toh PrivateRoute Banyaenge */}
					{/* <Route path="/" exact component={Add} isAuth={true}/> */}
					{/* <Route path="/" exact>
						<Add isAuth={true} />
					</Route> */}
					<PrivateRoute exact path="/" component={Add} />
					<Route path="/sub" component={Sub} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
