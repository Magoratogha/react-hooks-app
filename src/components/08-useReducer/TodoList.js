import PropTypes from 'prop-types';
import { memo } from 'react';
import TodoListItem from './TodoListItem';

const TodoList = memo(({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) =>
                    <TodoListItem
                        key={ todo.id }
                        todo={ todo }
                        index={ index }
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }/>)
            }
        </ul>
    );
});

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
};

export default TodoList;