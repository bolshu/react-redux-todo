export const TASK = {
    ADD: 'ADD',
    TOGLE_COMPLETE: 'COMPLETE',
    REMOVE: 'REMOVE',
}

export const addTask = title => ({
    type: TASK.ADD,
    payload: title,
});

export const completeTask = id => ({
    type: TASK.TOGLE_COMPLETE,
    payload: id,
});

export const removeTask = id => ({
    type: TASK.REMOVE,
    payload: id,
});
