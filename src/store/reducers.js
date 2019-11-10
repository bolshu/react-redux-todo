import { combineReducers } from 'redux';
import { taskCreatorReducer } from '../components/TaskCreator/store/reducers';

export default combineReducers({
    taskCreator: taskCreatorReducer,
});
