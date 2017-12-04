import React, {Component} from "react";
import SearchInput from "../SearchInput";
import ArtistTile from "../ArtistTile";

export default class Home extends Component {
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

		fetch('/api/search', options)
			.then(response => {
				return response.json();
			}).then(result => {
			this.setState({artists: result.artists.items})
		});
	}

	render() {
		const artists = this.state.artists;
		const artistTileList = artists.map((artist) => {
			return <ArtistTile key={artist.id} artist={artist}> </ArtistTile>
		});

		return (
			<div className="home-container">
				<SearchInput search={this.state.search}
										 onSearchChanged={this.handleSearchChanged}>
				</SearchInput>
				<div className="artist-list item-list">
					{artistTileList}
				</div>
			</div>
		);
	}
}