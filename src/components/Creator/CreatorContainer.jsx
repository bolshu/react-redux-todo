import React from 'react';
import { connect } from 'react-redux';
import Creator from './Creator';
import { addTask } from '../../store/tasksList/actions';

class CreatorContainer extends React.Component {
    render() {
        return (
            <Creator addTask={this.props.addTask} />
        )
    }
}

const mapDispatchToProps = {
    addTask,
}

export default connect(null, mapDispatchToProps)(CreatorContainer);
