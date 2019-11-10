import React from 'react';
import { connect } from 'react-redux';
import TaskCreator from './TaskCreator';
import { addTask } from '../TasksList/store/actions';

class TaskCreatorContainer extends React.Component {
    render() {
        return (
            <TaskCreator
                addTask={this.props.addTask}
            />
        )
    }
}

const mapDispatchToProps = {
    addTask,
}

export default connect(null, mapDispatchToProps)(TaskCreatorContainer);
