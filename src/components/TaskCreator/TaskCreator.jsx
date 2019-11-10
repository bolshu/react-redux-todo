import React from 'react';

export default class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onTitleChange(event) {
        this.props.setTaskTitle(event.target.value);
    }

    onButtonClick() {
        this.props.addTask(this.props.taskTitle);
    }

    render() {
        const { taskTitle } = this.props;

        return (
            <>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={this.onTitleChange}
                />
                <button
                    onClick={this.onButtonClick}
                >
                    add task
                </button>
            </>
        )
    }
}