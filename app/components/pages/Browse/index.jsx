import React, { Component } from "react";
import SearchInput from "../../common/SearchInput/index.jsx";
import ResultList from "../../common/ResultList/index.jsx";

export default class Browse extends Component {
	render() {
		return (
			<div>
				<SearchInput searchValue="test"></SearchInput>
				<ResultList></ResultList>
			</div>
		);
	}
}