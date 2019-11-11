import React from 'react';
import TaskContainer from '../Task/TaskContainer';

export class List extends React.Component {
    render() {
        const { tasks } = this.props;

        return tasks.length ?
            <ul>
                {tasks.map(task => {
                    return (
                        <TaskContainer
                            key={task.id}
                            title={task.title}
                            id={task.id}
                            isComplete={task.isComplete}
                        />
                    );
                })}
            </ul> :
            <div>
                Tasks list is empty
            </div>
    }
}
