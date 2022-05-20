import PropTypes from 'prop-types';
import { memo } from 'react';

const TodoListItem = memo(({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li
            className="list-group-item">
            <p
                onClick={() => handleToggle(todo.id)}
                className={'mb-0 ' + (todo.isDone ? 'completed' : '')}>
                {index + 1}. {todo.description}
            </p>
            <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-outline-danger btn-sm">
                Delete
            </button>
        </li>
    );
});

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoListItem;