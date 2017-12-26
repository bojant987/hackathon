import actionTypes from '../constants/actionTypes';

const initialState = {
	name: '',
	currentDay: 0,
	items: {},
	saving: false,
	error: null,
};

const actionHandlers = {
	[actionTypes.SET_NAME]: (state, action) => ({
		...state,
		name: action.name,
	}),

	[actionTypes.SET_CURRENT_DAY]: (state, action) => ({
		...state,
		currentDay: action.day,
		error: initialState.error,
	}),

	[actionTypes.ADD_ITEM]: (state, action) => ({
		...state,
		items: state.items.includes(action.item) ? state.items : [...state.items, action.item],
		error: initialState.error,
	}),

	[actionTypes.REMOVE_ITEM]: (state, action) => ({
		...state,
		items: state.items.filter(item => item != action.item),
		error: initialState.error,
	}),

	[actionTypes.SAVE_ORDER]: (state, action) => ({
		...state,
		saving: true,
		error: initialState.error,
	}),

	[actionTypes.SAVE_ORDER_SUCCESS]: (state, action) => ({
		...state,
		saving: false,
	}),	

	[actionTypes.SAVE_ORDER_ERROR]: (state, action) => ({
		...state,
		error: action.payload,
		saving: false,
	}),	
};

export default function(state = initialState, action) {
	if (!actionHandlers[action.type]) {
		return state;
	}

	return actionHandlers[action.type](state, action);
}