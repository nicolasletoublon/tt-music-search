import React, { Component } from "react";
import styles from './style.scss';
import Browse from "../pages/Browse/index.jsx";
import {Route, NavLink, HashRouter} from "react-router-dom";
import NewReleases from "../pages/NewReleases/index.jsx";

export default class App extends Component {
	render() {
		return (
			<HashRouter>
				<div>
					<ul className="header">
						<li><NavLink to="/">Browse</NavLink></li>
						<li><NavLink to="/releases">New releases</NavLink></li>
					</ul>
					<div className="content">
						<Route exact path="/" component={Browse}/>
						<Route path="/releases" component={NewReleases}/>
					</div>
				</div>
			</HashRouter>
		);
	}
}