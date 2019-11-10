export const ADD_TASK = 'ADD_TASK';

export const addTask = (title) => ({
    type: ADD_TASK,
    payload: title,
});
