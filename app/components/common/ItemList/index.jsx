import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

export default class ItemList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

}