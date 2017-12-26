import actionTypes from '../constants/actionTypes';

const initialState = {
	dataByDay: null,
	dataAll: null,
	error: null,
	loading: false,
};

const actionHandlers = {
	[actionTypes.REQUEST_MENU]: (state, action) => ({
		...initialState,
		loading: true,
	}),

	[actionTypes.RECEIVE_MENU]: (state, action) => ({
		...state,
		dataByDay: action.dataByDay,
		dataAll: action.dataAll,
		loading: false,
	}),

	[actionTypes.MENU_ERROR]: (state, action) => ({
		...state,
		error: action.payload,
		loading: false,
	}),
};

export default function(state = initialState, action) {
	if (!actionHandlers[action.type]) {
		return state;
	}

	return actionHandlers[action.type];
}