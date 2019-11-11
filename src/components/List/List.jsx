import React from 'react';
import TaskContainer from '../Task/TaskContainer';
import './List.css';

export class List extends React.Component {
    render() {
        const { tasks } = this.props;

        return (tasks.length ?
            <ul className="list-of-tasks">
                {tasks.map(task => {
                    return (
                        <TaskContainer
                            key={task.id}
                            title={task.title}
                            id={task.id}
                            isCompleted={task.isCompleted}
                        />
                    );
                })}
            </ul> : null);
    }
}
