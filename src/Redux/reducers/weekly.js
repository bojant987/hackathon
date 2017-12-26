import actionTypes from '../constants/actionTypes';

const initialState = {
	data: null,
	loading: false,
	error: null,
};

const actionHandlers = {
	[actionTypes.REQUEST_WEEKLY]: (state, action) => ({
		loading: true,
		error: initialState.error,
	}),

	[actionTypes.RECEIVE_WEEKLY]: (state, action) => ({
		data: action.payload,
		loading: false,
		error: initialState.error,
	}),

	[actionTypes.WEEKLY_ERROR]: (state, action) => ({
		loading: false,
		error: action.payload,
	}),
};