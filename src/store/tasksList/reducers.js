import { TASK } from './actions';
import * as getUniqueId from 'uuid/v4'

const initialState = {
    tasks: [],
};

export const tasksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case TASK.ADD:
            return {
                ...state,
                tasks: [...state.tasks].concat({
                    title: action.payload,
                    id: getUniqueId(),
                    isComplete: false,
                }),
            }

        case TASK.REMOVE:
            return {
                ...state,
                tasks: state.tasks.filter(task => {
                    if (task.id !== action.payload) {
                        return task;
                    }
                }),
            }

        case TASK.TOGLE_COMPLETE:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.isComplete = !task.isComplete;
                    }
                    return task;
                }),
            }

        default:
            return state;
    }
}
