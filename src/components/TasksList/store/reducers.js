import { CHANGE_TASK_CREATER_TITLE, ADD_TASK } from './actions';

const initialState = {
    taskTitle: '',
    tasks: [],
};

export const taskCreatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TASK_CREATER_TITLE:
            return {
                ...state,
                taskTitle: action.payload,
            }

        case ADD_TASK:
            const { tasks } = state;
            tasks.push(action.payload);

            return {
                ...state,
                tasks: [...tasks],
            }
    }

    return state;
}
