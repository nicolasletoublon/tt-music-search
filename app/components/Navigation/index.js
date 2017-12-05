import React, {Component} from "react";
import './style.scss';
import {FlatButton} from "material-ui";
import NavLink from "react-router-dom/es/NavLink";

export default class Navigation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let style = {margin: '5px'};

		return (
			<nav className="navigation">
				<NavLink exact to="/" className="nav-link">
					<FlatButton label="Search artists" style={style}>
					</FlatButton>
				</NavLink>
				<NavLink exact to="/releases" className="nav-link">
					<FlatButton label="New releases" style={style}>
					</FlatButton>
				</NavLink>
			</nav>
		);
	}
}