import actionTypes from '../constants/actionTypes';

const initialState = {
	name: '',
	currentDay: 0,
	items: {},
	loading: false,
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

	[actionTypes.ADD_ITEM]: (state, action) => {
		const itemsForDay = state.items[action.day];

		return {
			...state,
			items: itemsForDay.includes(action.item) ? state.items : {...state.items, [action.day]: [...itemsForDay, action.item]},
			error: initialState.error,
		};
	},

	[actionTypes.REMOVE_ITEM]: (state, action) => ({
		...state,
		items: {...state.items, [action.day]: state.items[action.day].filter(item => item != action.item)},
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

	[actionTypes.REQUEST_ORDER]: (state, action) => ({
		...state,
		error: initialState.error,
		loading: true,
	}),

	[actionTypes.RECEIVE_ORDER]: (state, action) => ({
		...state,
		error: initialState.error,
		items: action.payload,
		loading: false,
	}),

	[actionTypes.ORDER_ERROR]: (state, action) => ({
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