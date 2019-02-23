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
						<Route path="/home" component={Home} />
						<Redirect to="/dashboard" />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
