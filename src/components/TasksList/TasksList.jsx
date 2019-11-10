import React from 'react';
import Task from '../Task';

export const TasksList = (props) => (
    // render() {
    // console.log(props);

    // const { tasks } = this.props;

    // return (
    <>
        {props.length && props.tasks.map((task, index) => {
            return (
                <Task
                    key={`${task}-${index}`}
                />
            );
        })}
    </>
    // )
    // }
)
