import React from 'react';

export default class Task extends React.Component {
    state = {
        isCompleted: false,
    }

    constructor(props) {
        super(props);
        this.onCompleteChange = this.onCompleteChange.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onCompleteChange() {
        this.props.toggleCompleted(this.props.id);
    }

    onRemoveClick() {
        this.props.removeTask(this.props.id)
    }

    render() {
        const { id, title, isCompleted } = this.props;

        return (
            <li
                data-id={id}
            >
                <label>
                    <input
                        type="checkbox"
                        onChange={this.onCompleteChange}
                        checked={isCompleted}
                    />
                    <span>
                        {title}
                    </span>
                    <button
                        onClick={this.onRemoveClick}
                    >
                        remove task
                        </button>
                </label>
            </li>
        )
    }
}
