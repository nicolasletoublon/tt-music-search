import {SET_SEARCH} from '../types/search';
import * as _ from 'lodash';

const initState = {
	search: ''
};

export default (state = initState, action) => {
	switch (action.type) {
		case SET_SEARCH :
			console.log('SET_SEARCH Action');
			return _.assignIn({}, state, action.payload);
		default :
			return state
	}
}