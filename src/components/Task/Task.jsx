import React from 'react';
import './Task.css';

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
                className={`task ${isCompleted ? 'task task--completed' : ''}`}
            >
                <label className="task__checkbox-wrapper">
                    <input
                        type="checkbox"
                        onChange={this.onCompleteChange}
                        checked={isCompleted}
                        className="task__checkbox"
                    />
                    <span>
                        {title}
                    </span>
                </label>
                <button
                    className="task__remove-button"
                    onClick={this.onRemoveClick}
                />
            </li>
        )
    }
}
