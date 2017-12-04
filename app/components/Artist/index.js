import React, {Component} from "react";
import AlbumTile from "../AlbumTile";

export default class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	componentDidMount() {
		fetch(`/api/artist/${this.props.match.params.id}`)
			.then(response => {
				return response.json();
			}).then(result => {
			console.log(result);
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
			<div>
				<span className="content-header content-title">{artist.name}</span>
				<div className="artist-list item-list">
					{albumTileList}
				</div>
			</div>
		);
	}
}