import React, { Component } from "react";
// import ReactGA from 'react-ga';

import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Home} />
						<Redirect to="/" />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
