import React from 'react';

export default class Creator extends React.Component {
    state = {
        taskTitle: '',
    }

    constructor(props) {
        super(props);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onTitleChange(event) {
        this.setState({
            taskTitle: event.target.value,
        });
    }

    onButtonClick() {
        if (this.state.taskTitle.trim() === '') return;

        this.props.addTask(this.state.taskTitle);
        this.setState({
            taskTitle: '',
        });
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.taskTitle}
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