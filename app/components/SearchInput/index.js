import React, {Component} from "react";
import {FontIcon, TextField} from "material-ui";
import './style.scss';
import {setSearch} from '../../actions/search';
import {connect} from 'react-redux';

class SearchInput extends Component {

	constructor(props) {
		super(props);
		this.handleSearchChange = this.handleSearchChange.bind(this);
	}

	handleSearchChange(event) {
		//event.preventDefault();
		this.props.dispatch(setSearch(event.target.value))
		//this.props.onSearchChanged(event.target.value);
	}

	render() {
		const iconStyles = {
			padding: '0 0 8px 15px',
			color: '#b4b4b4'
		};

		return (
			<div className="search-input-container">
				<TextField
					id="search-artist-input"
					hintText="Search an artist here..."
					fullWidth={true}
					className="search-input"
					onChange={this.handleSearchChange}
				/>
				<FontIcon className="material-icons search-icon" style={iconStyles}>search</FontIcon>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return ({
		search: state.search
	});
}

export default connect(mapStateToProps)(SearchInput);