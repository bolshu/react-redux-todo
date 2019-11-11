export const TASK = {
    ADD: 'ADD',
    TOGLE_COMPLETED: 'COMPLETE',
    REMOVE: 'REMOVE',
}

export const addTask = title => ({
    type: TASK.ADD,
    payload: title,
});

export const toggleCompleted = id => ({
    type: TASK.TOGLE_COMPLETED,
    payload: id,
});

export const removeTask = id => ({
    type: TASK.REMOVE,
    payload: id,
});
