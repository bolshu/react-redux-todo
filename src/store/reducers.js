import { combineReducers } from 'redux';

import { taskCreatorReducer } from '../components/TaskCreator/store/reducers';
// import { taskReducer } from './Task/reducers';

export default combineReducers({
    taskCreator: taskCreatorReducer,
    // task: taskReducer,
});
