import actionTypes from '../constants/actionTypes';

const initialState = {
	byDay: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
    },
	all: [],
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
		byDay: action.dataByDay,
		all: action.dataAll,
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

	return actionHandlers[action.type](state, action);
}