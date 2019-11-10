import React from 'react';
import { connect } from 'react-redux';
import TaskCreator from './TaskCreator';
import { addTask } from './store/actions';

class TaskCreatorContainer extends React.Component {
    render() {
        const { taskTitle, addTask } = this.props;

        return (
            <TaskCreator
                taskTitle={taskTitle}
                addTask={addTask}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        taskTitle: state.taskCreator.taskTitle,
        tasks: state.taskCreator.tasks,
    }
}

const mapDispatchToProps = {
    addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreatorContainer);
