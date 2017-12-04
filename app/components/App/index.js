import React, {Component} from "react";
import '../../assets/styles/common.scss';
import Home from "../Home";
import {Route, NavLink} from "react-router-dom";
import NewReleases from "../NewReleases";
import Artist from "../Artist";
import {RaisedButton} from "material-ui";
export default class App extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		fetch('/api/get_token')
			.then(response => {
				return response.json();
			}).then(result => {
			console.log(result.access_token);
		});
	}


	render() {
		let style = {margin: '5px'};

		return (
			<div>
				<div className="header">
					<NavLink to="/">
						<RaisedButton label="Browse artists" style={style}>
						</RaisedButton>
					</NavLink>
					<NavLink to="/releases">
						<RaisedButton label="New releases" style={style} disabled={true}>
						</RaisedButton>
					</NavLink>
				</div>
				<div className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/artist/:id" component={Artist}/>
					<Route path="/releases" component={NewReleases}/>
				</div>
			</div>
		);
	}
}