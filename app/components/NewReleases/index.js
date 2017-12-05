import React, {Component} from "react";
import AlbumTile from "../AlbumTile";
import Layout from "../Layout";
import {CircularProgress} from "material-ui";

export default class NewReleases extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: [],
			isLoading: false
		};
	}

	componentDidMount() {
		this.setState({albums: [], isLoading: true});
		fetch(`/api/releases`)
			.then(response => response.json())
			.then(result => {
				this.setState({albums: result.albums, isLoading: false})
			});
	}

	render() {
		const albums = this.state.albums;
		const albumTileList = albums.map((album) => {
			return <AlbumTile key={album.id} artist={album.artists[0]} album={album}> </AlbumTile>
		});

		return (
			<Layout title="New releases">
				<div className="releases-list item-list">
					{this.state.isLoading ? <CircularProgress size={50} thickness={4}/> : null}
					{albumTileList}
				</div>
			</Layout>
		);
	}
}