import React, {Component} from "react";

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
			<div>
				<input id="search-artist-input"
							 placeholder="Search an artist..."
							 type="text"
							 className="search-input"
							 value={this.props.search}
							 onChange={this.handleSearchChange}
				/>
			</div>
		);
	}
}