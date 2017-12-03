import React, {Component} from "react";
import SearchInput from "../../common/SearchInput/index.jsx";
import ResultList from "../../common/ResultList/index.jsx";

export default class Browse extends Component {
	constructor(props) {
		super(props);
		this.handleSearchChanged = this.handleSearchChanged.bind(this);
		this.state = {
			search: '',
			artists: []
		};
	}

	handleSearchChanged(search) {
		this.setState({search: search});

		let options = {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({
				search: search,
				type: 'artist'
			})
		};

		fetch('http://localhost:8888/search', options)
			.then(response => {
				return response.json();
			}).then(result => {
			console.log(result);
			this.setState({artists: result.artists.items})
		});
	}

	render() {
		return (
			<div>
				<SearchInput searchValue={this.state.search}
										 onSearchChanged={this.handleSearchChanged}>
				</SearchInput>
				<ResultList results={this.state.artists}>

				</ResultList>
			</div>
		);
	}
}