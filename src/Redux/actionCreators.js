import axios from 'axios';
import querystring from 'query-string';

import baseUrl from './constants/baseUrl';
import actionTypes from './constants/actionTypes';
import store from './store';

function requestMenu() {
	return {
		type: actionTypes.REQUEST_MENU,
	};
}

function receiveMenu(data) {
	const dataAll = {};
	const dataByDay = {};

	for (let i = 0; i <= 6; i++) {
		dataByDay[i] = [];

		if (data[i]) {
			data[i].forEach(item => {
				dataAll[item.id] = item;

				dataByDay[i].push(item.id);
			});
		}
	}

	return {
		type: actionTypes.RECEIVE_MENU,
		dataByDay,
		dataAll,
	};
}

function menuError(error) {
	return {
		type: actionTypes.MENU_ERROR,
		payload: error,
	};
}

export function fetchMenu() {
	return dispatch => {
		dispatch(requestMenu());

		axios.get(baseUrl+'menu').then(response => {
			console.log('response:', response);
			dispatch(receiveMenu(response.data));
		}).catch(error => {
			console.log('error:', error);
			const message = error.response || error.message || 'error';

			dispatch(menuError(message));
		});
	};
}

export function switchDay(day) {
	return {
		type: actionTypes.SET_CURRENT_DAY,
		day,
	};
}

export function setName(name) {
	return {
		type: actionTypes.SET_NAME,
		name,
	};
}

export function addItem(day, item) {
	return {
		type: actionTypes.ADD_ITEM,
		day,
		item,
	};
}

export function removeItem(day, item) {
	return {
		type: actionTypes.REMOVE_ITEM,
		day,
		item,
	};
}

function saveOrderStart() {
	return {
		type: actionTypes.SAVE_ORDER,
	};
}

function saveOrderSuccess() {
	return {
		type: actionTypes.SAVE_ORDER_SUCCESS,
	};
}

function saveOrderError() {
	return {
		type: actionTypes.SAVE_ORDER_ERROR,
	};
}

export function saveOrder(day, name) {
	return dispatch => {
		dispatch(saveOrderStart());

		const foodItems = store.getState().order.items[day];

		console.log(store.getState().order);

		const data = {
			day,
			name,
			foodList: foodItems,
		}

		axios.post(baseUrl+'order?'+querystring.stringify(data)).then(response => {
			localStorage.setItem('name', name);
			dispatch(saveOrderSuccess());
		}).catch(error => {
			const message = error.response || error.message || 'error';

			dispatch(saveOrderError(message));
		});
	};
}

function requestDaily() {
	return {
		type: actionTypes.REQUEST_DAILY,
	};
}

function receiveDaily(day, data) {
	return {
		type: actionTypes.RECEIVE_DAILY,
		day,
		payload: data,
	};
}

function dailyError(day, error) {
	return {
		type: actionTypes.DAILY_ERROR,
		day,
		payload: error,
	};
}

export function fetchDailySummary(day) {
	return dispatch => {
		dispatch(requestDaily());

		axios.get(baseUrl+'order?day='+day).then(response => {
			dispatch(receiveDaily(day, response.data));
		}).catch(error => {
		    console.log('error', error);
			const message = error.response || error.message || 'error';

			dispatch(dailyError(day, message));
		});
	};
}

function requestWeekly() {
	return {
		type: actionTypes.REQUEST_WEEKLY,
	};
}

function receiveWeekly(data) {
	return {
		type: actionTypes.RECEIVE_WEEKLY,
		payload: data,
	};
}

function weeklyError(error) {
	return {
		type: actionTypes.DAILY_ERROR,
		payload: error,
	};
}

export function fetchWeeklySummary() {
	return dispatch => {
		dispatch(requestWeekly());

		axios.get(baseUrl+'order').then(response => {
			dispatch(receiveWeekly(response.data));
		}).catch(error => {
			const message = error.response || error.message || 'error';

			dispatch(weeklyError(message));
		});
	};
}

function requestOrders() {
	return {
		type: actionTypes.REQUEST_ORDER,
	};
}

function receiveOrders(data) {
	return {
		type: actionTypes.RECEIVE_ORDER,
		payload: data,
	};
}

function ordersError(error) {
	return {
		type: actionTypes.ORDER_ERROR,
		payload: error,
	};
}

export function fetchOrders(name) {
	return dispatch => {
		dispatch(requestOrders());

		axios.get(baseUrl+`order?name=${name}&day=0`).then(response => {
			dispatch(receiveOrders(response.data));
		}).catch(error => {
			const message = error.response || error.message || 'error';

			dispatch(ordersError(message));
		});
	};
}