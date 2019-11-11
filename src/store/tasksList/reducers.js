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
                    isCompleted: false,
                }),
            }

        case TASK.REMOVE:
            return {
                ...state,
                tasks: state.tasks.filter(task => (task.id !== action.payload)),
            }

        case TASK.TOGLE_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.isCompleted = !task.isCompleted;
                    }
                    return task;
                }),
            }

        default:
            return state;
    }
}
