import React, {Component} from "react";
import styles from './style.scss';
import Browse from "../pages/Browse/index.jsx";
import {Route, NavLink, HashRouter} from "react-router-dom";
import NewReleases from "../pages/NewReleases/index.jsx";

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			logged: false
		};
	}

	componentDidMount() {
		fetch('http://localhost:8888/get_token')
			.then(response => {
				return response.json();
			}).then(result => {
			console.log(result.access_token);
			this.setState({logged: true});
		});
	}


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