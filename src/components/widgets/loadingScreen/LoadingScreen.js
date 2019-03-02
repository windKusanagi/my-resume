
import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./LoadingScreen.scss";

const LoadingScreen = () => {
	return (
		<div className="loadingScreen">
			<p className="text-semibold">Loading ... </p>
			<CircularProgress disableShrink className="loadingScreen__child" />
		</div>
	);
};

export default LoadingScreen;
