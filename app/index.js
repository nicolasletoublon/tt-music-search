import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {MuiThemeProvider} from "material-ui";
import {BrowserRouter} from "react-router-dom";
import store from './store';
import {Provider} from 'react-redux';
import './assets/styles/common.scss';

ReactDOM.render(
	<BrowserRouter>
		<MuiThemeProvider>
			<Provider store={store}>
				<App/>
			</Provider>
		</MuiThemeProvider>
	</BrowserRouter>,
	document.getElementById('app')
);