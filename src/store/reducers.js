import { combineReducers } from 'redux';
import { tasksListReducer } from '../components/TasksList/store/reducers';

export default combineReducers({
    tasksList: tasksListReducer
});
