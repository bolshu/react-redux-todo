import React from 'react';
import { connect } from 'react-redux';
import { TasksList } from './TasksList';
import { completeTask, removeTask } from './store/actions'

class TasksListContainer extends React.Component {
    render() {
        const { tasks } = this.props;

        return (
            <TasksList
                tasks={tasks}
                removeTask={removeTask}
            />
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasksList.tasks,
});

const mapDispatchToProps = {
    completeTask,
    removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TasksListContainer);
