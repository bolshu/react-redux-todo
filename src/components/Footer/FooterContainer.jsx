import React from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

class FooterContainer extends React.Component {
    render() {
        const { tasks } = this.props;
        const completedTasksCount = tasks.filter(task => (task.isCompleted)).length;
        const totalTasksCount = tasks.length;

        return (
            <Footer
                completedTasksCount={completedTasksCount}
                totalTasksCount={totalTasksCount}
            />
        )
    }
}

const mapStateToProps = state => ({
    tasks: state.tasksList.tasks,
})

export default connect(mapStateToProps, null)(FooterContainer);
