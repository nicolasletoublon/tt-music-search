import React, {Component} from "react";
import './style.scss';
import AlbumPicture from "../AlbumPicture";
import AlbumInfo from "../AlbumInfo";

export default class AlbumTile extends Component {

	constructor(props) {
		super(props);
		this.handleAlbumClick = this.handleAlbumClick.bind(this);
		this.state = {
			isTracksVisible: false
		}
	}

	handleAlbumClick() {
		this.setState({isTracksVisible: !this.state.isTracksVisible})
	};

	render() {
		let album = this.props.album,
			artist = this.props.artist || null;

		return (
			<div className="tile-container album-tile" onClick={this.handleAlbumClick}>
				<AlbumPicture images={album.images}> </AlbumPicture>
				<AlbumInfo album={album} isTracksVisible={this.state.isTracksVisible}>
					{artist ? <p className="artist">{artist.name}</p> : null}
					<p className="name">{album.name}</p>
					{album.genres.length ? this.getGenres(album.genres) : null}
				</AlbumInfo>
			</div>
		);
	}

}