import React from 'react';
import { connect } from 'react-redux';
import { List } from './List';

class ListContainer extends React.Component {
    render() {
        const { tasks } = this.props;

        return (
            <List
                tasks={tasks}
            />
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasksList.tasks,
});

export default connect(mapStateToProps, null)(ListContainer);
