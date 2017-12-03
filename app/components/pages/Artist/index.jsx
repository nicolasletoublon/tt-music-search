import React, {Component} from "react";
import ItemList from "../../common/ItemList/index.jsx";

export default class Artist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			albums: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:8888/artist/' + this.props.match.params.id)
			.then(response => {
				return response.json();
			}).then(result => {
			console.log(result);
			this.setState({albums: result.items})
		});
	}

	render() {
		const albums = this.state.albums;
		const albumList = albums.map((album) => {
			return <li key={album.id }>{album.name}</li>
		});

		return (
			<div>
				<h2>{this.props.location.state.artist.name}</h2>
				<ItemList items={this.state.albums}>
					{albumList}
				</ItemList>
			</div>
		);
	}
}