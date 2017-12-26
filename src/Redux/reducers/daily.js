import actionTypes from '../constants/actionTypes';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const actionHandlers = {
	[actionTypes.REQUEST_DAILY]: (state, action) => ({
		loading: true,
		error: initialState.error,
	}),

	[actionTypes.RECEIVE_DAILY]: (state, action) => ({
		data: action.payload,
		loading: false,
		error: initialState.error,
	}),

	[actionTypes.DAILY_ERROR]: (state, action) => ({
		loading: false,
		error: action.payload,
	}),
};