import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { completeTask, removeTask } from '../../store/tasksList/actions'

class ListContainer extends React.Component {
    render() {
        const { id, title, completeTask, removeTask, isComplete } = this.props;

        return (
            <Task
                id={id}
                title={title}
                isComplete={isComplete}
                completeTask={completeTask}
                removeTask={removeTask}
            />
        )
    }
}

const mapDispatchToProps = {
    completeTask,
    removeTask,
}

export default connect(null, mapDispatchToProps)(ListContainer);
