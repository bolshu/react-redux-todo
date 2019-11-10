export const ADD_TASK = 'ADD_TASK';

export const addTask = taskTitle => ({
    type: ADD_TASK,
    payload: taskTitle,
});

export const COMPLETE_TASK = 'COMPLETE_TASK';

export const completeTask = taskTitle => ({
    type: COMPLETE_TASK,
    payload: taskTitle,
});

export const REMOVE_TASK = 'REMOVE_TASK';

export const removeTask = task => ({
    type: REMOVE_TASK,
    payload: task,
});
