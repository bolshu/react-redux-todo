import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render() {
        const { totalTasksCount, completedTasksCount } = this.props;

        return (
            <div className="footer">
                {totalTasksCount ? `Complete ${completedTasksCount} of ${totalTasksCount}` : 'List are empty'}
            </div>
        )
    }
}
