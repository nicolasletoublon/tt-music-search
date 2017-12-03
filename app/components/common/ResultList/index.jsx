import React, { Component } from "react";

export default class ResultList extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const items = this.props.results;
		const listItems = items.map((item) =>{
			return <li>{item.name}</li>
		});

		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}