import React from 'react';
import Task from '../Task';

export const TasksList = (props) => (
    <ul>
        {props.tasks && props.tasks.length && props.tasks.map((task, index) => {
            return (
                <Task
                    key={`${task}-${index}`}
                />
            );
        })}
    </ul>
)
