import { ADD_TASK } from './actions';

const initialState = {
    taskTitle: '',
    tasks: ['эфывфыв', '12', '123'],
};

export const taskCreatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: Array.from(state.tasks).concat(action.payload),
            }
    }

    return state;
}
