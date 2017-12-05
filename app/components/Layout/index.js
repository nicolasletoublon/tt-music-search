import React, {Component} from "react";
import './style.scss';

export class Layout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="section">
				<div className="section-header">
					<span className="title">{this.props.title}</span>
				</div>
				<div className="section-body">
					{this.props.children}
				</div>
			</div>
		);
	}
}