import React, {Component} from "react";
import '../../assets/styles/common.scss';
import './style.scss';
import Home from "../Home";
import {Route, NavLink} from "react-router-dom";
import NewReleases from "../NewReleases";
import Artist from "../Artist";
import {FlatButton} from "material-ui";

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		fetch('/api/get_token')
			.then(response => response.json())
			.then(result => {
				console.log('Logged in');
			});
	}


	render() {
		let style = {margin: '5px'};

		return (
			<div>
				<header className="header">
					<NavLink to="/">
						<FlatButton label="Search artists" style={style}>
						</FlatButton>
					</NavLink>
					<NavLink to="/releases" onClick={e => e.preventDefault()}>
						<FlatButton label="New releases" style={style} disabled={true}>
						</FlatButton>
					</NavLink>
				</header>
				<section className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/artist/:id" component={Artist}/>
					<Route path="/releases" component={NewReleases}/>
				</section>
				<footer className="footer"></footer>
			</div>
		);
	}
}