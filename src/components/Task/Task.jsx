import React from 'react';

export default class Task extends React.Component {
    state = {
        isComplete: false,
    }

    constructor(props) {
        super(props);
        this.onCompleteChange = this.onCompleteChange.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onCompleteChange() {
        this.props.completeTask(this.props.id);
    }

    onRemoveClick() {
        this.props.removeTask(this.props.id)
    }

    render() {
        const { id, title, isComplete } = this.props;

        return (
            <li
                data-id={id}
            >
                <label>
                    <input
                        type="checkbox"
                        onChange={this.onCompleteChange}
                        checked={isComplete}
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
