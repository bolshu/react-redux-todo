import React from 'react';

export default function Task(props) {
    return (
        <li>
            <label>
                <input
                    type="checkbox"
                    // onChange={() => props.completeTask(props.index)}
                    defaultChecked={false}
                />
                <span>
                    {props.taskTitle}
                </span>
                <button
                    onClick={props.removeTask}
                >
                    remove task
                    </button>
            </label>
        </li>
    )
}
