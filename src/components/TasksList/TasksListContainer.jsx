import React from 'react';
import { connect } from 'react-redux';
import { TasksList } from './TasksList';

class TasksListContainer extends React.Component {
    render() {
        const { tasks } = this.props;

        return (
            <TasksList
                tasks={tasks}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.taskCreator.tasks,
    }
}

export default connect(mapStateToProps, null)(TasksListContainer);
