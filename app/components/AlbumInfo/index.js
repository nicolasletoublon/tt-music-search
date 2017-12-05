import React, {Component} from "react";
import './style.scss';
import moment from 'moment';
import Rating from "../Rating";

export default class AlbumInfo extends Component {

	constructor(props) {
		super(props);
	}

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
			releaseDate = moment(album.release_date).format('YYYY');

		return (
			<div className="tile-info-container">
				{this.props.children}
				<div className="pop-date-container">
					<Rating popularity={album.popularity}> </Rating>
					<span className="releaseDate">{releaseDate}</span>
				</div>
				{this.props.isTracksVisible ? this.getTracks(album.tracks.items) : null}
			</div>
		);
	}

}