import React from 'react';

export default class TaskCreator extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    state = {
        taskTitle: '',
    }

    onTitleChange(event) {
        this.setState({
            taskTitle: event.target.value,
        });
    }

    onButtonClick() {
        this.props.addTask(this.props.taskTitle);
        this.setState({
            taskTitle: '',
        });
    }

    render() {
        const { taskTitle } = this.state;

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