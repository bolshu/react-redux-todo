import React from 'react';
import { connect } from 'react-redux';
import Task from './Task';
import { toggleCompleted, removeTask } from '../../store/tasksList/actions'

class ListContainer extends React.Component {
    render() {
        const { id, title, toggleCompleted, removeTask, isComplete } = this.props;

        return (
            <Task
                id={id}
                title={title}
                isComplete={isComplete}
                toggleCompleted={toggleCompleted}
                removeTask={removeTask}
            />
        )
    }
}

const mapDispatchToProps = {
    toggleCompleted,
    removeTask,
}

export default connect(null, mapDispatchToProps)(ListContainer);
