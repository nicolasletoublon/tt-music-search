import React, {Component} from "react";
import AlbumTile from "../AlbumTile";
import {Layout} from "../Layout/index";

export default class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	componentWillMount() {
		fetch(`/api/artist/${this.props.match.params.id}`)
			.then(response => response.json())
			.then(result => {
				this.setState({albums: result.albums})
			});
	}

	render() {
		const artist = this.props.location.state.artist;
		const albums = this.state.albums;
		const albumTileList = albums.map((album) => {
			return <AlbumTile key={album.id} album={album} artist={artist}> </AlbumTile>
		});

		return (
			<Layout title= {'Albums by ' + artist.name}>
				<div className="artist-list item-list">
					{albumTileList}
				</div>
			</Layout>
		);
	}
}