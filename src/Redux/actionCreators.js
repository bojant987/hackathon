import axios from 'axios';

import baseUrl from './constants/baseUrl';
import actionTypes from './constants/actionTypes';

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

export function addItem(item) {
	return {
		type: actionTypes.ADD_ITEM,
		item,
	};
}

export function removeItem(item) {
	return {
		type: actionTypes.REMOVE_ITEM,
		item,
	};
}

export function saveOrder() {}

export function fetchSummary() {}

export function fetchOrder(day) {}