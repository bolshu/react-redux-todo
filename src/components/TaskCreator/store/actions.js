export const CHANGE_TASK_CREATER_TITLE = 'CHANGE_TASK_CREATER_TITLE';

export const setTaskTitle = (title) => ({
    type: CHANGE_TASK_CREATER_TITLE,
    payload: title,
});

export const ADD_TASK = 'ADD_TASK';

export const addTask = (title) => ({
    type: ADD_TASK,
    payload: title,
});
