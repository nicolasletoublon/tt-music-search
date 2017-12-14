import React, {Component} from "react";
import SearchInput from "../SearchInput";
import ArtistTile from "../ArtistTile";
import Layout from "../Layout";
import {CircularProgress} from "material-ui";
import {connect} from 'react-redux';

class Home extends Component {
	constructor(props) {
		super(props);
		this.handleSearchChanged = this.handleSearchChanged.bind(this);
		this.state = {
			search: '',
			artists: [],
			isLoading: false
		};
	}

	handleSearchChanged(search) {
		if(search === '' || search === ' ') {
			this.setState({search: ''});
			return;
		}

		this.setState({search: search, isLoading: true, artists: []});

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
			this.setState({artists: result.artists, isLoading: false})
		});
	}

	render() {
		const artists = this.state.artists;
		const artistTileList = artists.map((artist) => {
			return <ArtistTile key={artist.id} artist={artist}> </ArtistTile>
		});

		return (
			<Layout title="Search an artist">
				<SearchInput>
				</SearchInput>
				<div className="artist-list item-list">
					{this.state.isLoading ? <CircularProgress size={50} thickness={4}/> : null}
					{artistTileList}
				</div>
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return ({
		search: state.search
	});
}

export default connect(mapStateToProps)(Home);