import React from 'react';

export default class Task extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <label>
                    <input type="checkbox" />
                    <span>
                        this.props.taskTitle
                    </span>
                    <button>
                        remove task
                </button>
                </label>
            </>
        )
    }
}