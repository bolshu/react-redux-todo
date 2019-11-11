import { combineReducers } from 'redux';
import { tasksListReducer } from './tasksList/reducers';

export default combineReducers({
    tasksList: tasksListReducer
});
