import React from 'react';

export default class Footer extends React.Component {
    render() {
        const { totalTasksCount, completedTasksCount } = this.props;

        return totalTasksCount ? (
            <div>
                Complete {completedTasksCount} of {totalTasksCount}
            </div>
        ) : null;
    }
}
