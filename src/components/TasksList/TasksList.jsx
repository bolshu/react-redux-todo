import React from 'react';
import Task from './Task';

export class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.completeTask = this.completeTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

    completeTask(index) {
        this.props.completeTask(index);
    }

    removeTask() {
        this.props.removeTask(this.props.index);
    }

    render() {
        const { tasks } = this.props;

        return tasks.length ?
            <ul>
                {tasks.map((taskTitle, index) => {
                    return (
                        <Task
                            key={`${taskTitle.replace(' ', '-')}-${index}`}
                            taskTitle={taskTitle}
                            index={index}
                            // completeTask={this.completeTask}
                            removeTask={this.removeTask}
                        />
                    );
                })}
            </ul> :
            <div>
                Tasks list is empty
            </div>
    }
}
