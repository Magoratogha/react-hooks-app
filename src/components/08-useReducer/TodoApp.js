import { Fragment, useCallback, useEffect, useReducer } from "react";
import todoReducer from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

function TodoApp() {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const handleAddTodo = useCallback((newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }, []);

    const handleDelete = useCallback((todoId) => {
        dispatch({
            type: 'delete',
            payload: todoId
        });
    }, []);

    const handleToggle = useCallback((todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <Fragment>
            <h1>TodoApp ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle} />
                </div>
                <div className="col-5">
                    <TodoAdd
                        handleAddTodo={handleAddTodo} />
                </div>
            </div>
        </Fragment>
    );
}

export default TodoApp;