import React, {Component} from "react";
import AlbumTile from "../AlbumTile";
import Layout from "../Layout";
import {CircularProgress} from "material-ui";

export default class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: [],
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({albums: [], isLoading: true})
		fetch(`/api/artist/${this.props.match.params.id}`)
			.then(response => response.json())
			.then(result => {
				this.setState({albums: result.albums, isLoading: false})
			});
	}

	render() {
		const artist = this.props.location.state.artist;
		const albums = this.state.albums;
		const albumTileList = albums.map((album) => {
			return <AlbumTile key={album.id} album={album}> </AlbumTile>
		});

		return (
			<Layout title= {'Albums by ' + artist.name}>
				<div className="artist-list item-list">
					{this.state.isLoading ? <CircularProgress size={50} thickness={4}/> : null}
					{albumTileList}
				</div>
			</Layout>
		);
	}
}