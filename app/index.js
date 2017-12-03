import React from "react";
import ReactDOM from "react-dom";
import App from "./components/layout/App.jsx";
import BrowserRouter from "react-router-dom/es/BrowserRouter";

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('app')
);