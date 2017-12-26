import { combineReducers } from 'redux';
import menu from './reducers/menu';
import order from './reducers/order';

export default combineReducers({
    menu,
    order,
});
