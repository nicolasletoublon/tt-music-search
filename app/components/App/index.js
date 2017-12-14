import React, {Component} from "react";
import './style.scss';
import Home from "../Home";
import {Route} from "react-router-dom";
import NewReleases from "../NewReleases";
import Artist from "../Artist";
import Navigation from "../Navigation";
import {connect} from 'react-redux';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			search: ''
		}
	}

	componentWillMount() {
		fetch('/api/get_token')
			.then(response => response.json())
			.then(result => {
				console.log('Logged in');
			});
	}

	render() {
		return (
			<div>
				<header className="header">
					<Navigation> </Navigation>
				</header>
				<section className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/artist/:id" component={Artist}/>
					<Route path="/releases" component={NewReleases}/>
				</section>
				<footer className="footer">

				</footer>
			</div>
		);
	}
}

export default connect(state => state)(App);