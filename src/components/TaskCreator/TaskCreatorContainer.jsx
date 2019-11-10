import React from 'react';
import { connect } from 'react-redux';
import TaskCreator from './TaskCreator';
import { setTaskTitle, addTask } from './store/actions';

class TaskCreatorContainer extends React.Component {
    render() {
        const { taskTitle, setTaskTitle, addTask } = this.props;

        return (
            <TaskCreator
                taskTitle={taskTitle}
                setTaskTitle={setTaskTitle}
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
    setTaskTitle,
    addTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskCreatorContainer);
