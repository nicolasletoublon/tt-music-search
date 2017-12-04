import React, {Component} from "react";
import './style.scss';
import {FontIcon} from "material-ui";

export default class Rating extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let popularity = this.props.popularity;
		let starsClasses = [];
		while (starsClasses.length < 5) {
			popularity >= 20 ? starsClasses.push('star') : starsClasses.push('star_outline');
			popularity -= 20;
		}

		let stars = starsClasses.map((star, index) => {
			return <FontIcon key={index} className="material-icons start" >{star}</FontIcon>
		});

		return (
			<div className="popularity-container">
				{stars}
			</div>
		);
	}

}