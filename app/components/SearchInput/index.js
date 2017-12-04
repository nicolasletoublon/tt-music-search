import React, {Component} from "react";
import {TextField} from "material-ui";
import './style.scss';

export default class SearchInput extends Component {

	constructor(props) {
		super(props);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange(event) {
		event.preventDefault();
		this.props.onSearchChanged(event.target.value);
	}

	render() {
		return (
			<div className="search-input-container content-header">
				<TextField
					id="search-artist-input"
					hintText="Search an artist"
					fullWidth={true}
					floatingLabelText="Artist"
					className="search-input"
					value={this.props.search}
					onChange={this.handleSearchChange}
				/>
			</div>
		);
	}
}