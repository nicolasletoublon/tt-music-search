import React, {Component} from "react";
import './style.scss';
import moment from 'moment';
import Rating from "../Rating";

export default class AlbumPicture extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let images = this.props.images,
			image = images.length ? images[0].url : '',
			imageStyle = {backgroundImage: `url('${image}')`,};

		return (
			<div className="picture-container" style={imageStyle} alt="Cover of the album"> </div>
		);
	}

}