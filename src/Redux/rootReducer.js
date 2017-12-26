import { combineReducers } from 'redux';
import menu from './reducers/menu';
import order from './reducers/order';
import daily from './reducers/daily';
import weekly from './reducers/daily';

export default combineReducers({
    menu,
    order,
    daily,
    weekly,
});
