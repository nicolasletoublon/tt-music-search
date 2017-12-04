import React, {Component} from "react";
import './style.scss';
import {withRouter} from 'react-router-dom'

class ArtistTile extends Component {

	constructor(props) {
		super(props);
		this.handleArtistClick = this.handleArtistClick.bind(this);
	}

	handleArtistClick(artist) {
		this.props.history.push({
			pathname: `/artist/${artist.id}`,
			state: {artist: artist}
		});
	}

	render() {
		let artist = this.props.artist;
		let image = artist.images.length ? artist.images[0].url : '';
		let imageStyle = {
			backgroundImage: `url('${image}')`,
		};

		return (
			<div className="tile-container artist-tile" onClick={() => this.handleArtistClick(artist)}>
				<div className="picture-container" style={imageStyle} alt="Cover of the artist">
				</div>
				<div className="info-container">
					<p>{artist.name}</p>
				</div>
			</div>
		);
	}

}

ArtistTile = withRouter(ArtistTile);
export default ArtistTile;