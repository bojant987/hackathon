import actionTypes from '../constants/actionTypes';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const actionHandlers = {
	[actionTypes.REQUEST_WEEKLY]: (state, action) => ({
        ...state,
		loading: true,
		error: initialState.error,
	}),

	[actionTypes.RECEIVE_WEEKLY]: (state, action) => ({
        ...state,
		data: action.payload,
		loading: false,
		error: initialState.error,
	}),

	[actionTypes.WEEKLY_ERROR]: (state, action) => ({
        ...state,
		loading: false,
		error: action.payload,
	}),
};

export default function(state = initialState, action) {
    if (!actionHandlers[action.type]) {
        return state;
    }

    return actionHandlers[action.type](state, action);
}