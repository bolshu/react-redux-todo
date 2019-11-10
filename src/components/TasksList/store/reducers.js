import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from './actions';

const initialState = {
    tasks: [],
};

export const tasksListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            console.log('add', action);

            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            }

        case REMOVE_TASK:
            console.log('remove', action);

            return {
                ...state,
                tasks: Array.from(state.tasks).slice(action.payload.index, 1),
            }

        case COMPLETE_TASK:
            console.log('complete', action);

            return {
                ...state,
                tasks: Array.from(state.tasks)[action.payload.index].isCompleted = action.payload.isCompleted,
            }

        default:
            return state;
    }
}
