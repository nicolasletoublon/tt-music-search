import React, {Component} from "react";
import SearchInput from "../../common/SearchInput/index.jsx";
import ItemList from "../../common/ItemList/index.jsx";
import Link from "react-router-dom/es/Link";

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
			this.setState({artists: result.artists.items})
		});
	}

	render() {
		const artists = this.state.artists;
		const artistList = artists.map((artist) => {
			return <li key={artist.id}>
				<Link to={{pathname: `artist/${artist.id}`, state: { artist: artist }}}>{artist.name}</Link>
			</li>
		});

		return (
			<div>
				<SearchInput searchValue={this.state.search}
										 onSearchChanged={this.handleSearchChanged}>
				</SearchInput>
				<ItemList items={this.state.artists}>
					{artistList}
				</ItemList>
			</div>
		);
	}
}