import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
	<BrowserRouter>
		<MuiThemeProvider>
			<App/>
		</MuiThemeProvider>
	</BrowserRouter>,
	document.getElementById('app')
);