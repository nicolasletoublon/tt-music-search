import React, {Component} from "react";
import './style.scss';
import moment from 'moment';
import Rating from "../Rating";

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

	getGenres(genres) {
		let genreList = genres.map((genre) => {
			return <span key={genre} className="genre">{genre}</span>
		});

		return <div className="genre-container">{genreList}</div>
	}

	getTracks(tracks) {
		let trackList = tracks.map((track, index) => {
			return <span key={track.id} className="track">{index + 1}. {track.name}</span>
		});

		return <div className="tracks-container">{trackList}</div>
	}

	render() {
		let album = this.props.album,
			image = album.images.length ? album.images[0].url : '',
			imageStyle = {backgroundImage: `url('${image}')`,},
			releaseDate = moment(album.release_date).format('YYYY');

		return (
			<div className="tile-container album-tile" onClick={this.handleAlbumClick}>
				<div className="picture-container" style={imageStyle} alt="Cover of the album">
				</div>
				<div className="info-container">
					<p className="name">{album.name}</p>
					{album.genres.length ? this.getGenres(album.genres) : null}
					<div className="pop-date-container">
						<Rating popularity={album.popularity}></Rating>
						<p className="releaseDate">{releaseDate}</p>
					</div>
					{this.state.isTracksVisible ? this.getTracks(album.tracks.items) : null}
				</div>
			</div>
		);
	}

}