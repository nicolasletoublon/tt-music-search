import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

export default class Tile extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="tile-container">
				{this.props.children}
			</div>
		);
	}
}