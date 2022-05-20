import { Fragment, memo } from "react";
import useForm from "../../hooks/useForm";
import PropTypes from 'prop-types';

const TodoAdd = memo(({ handleAddTodo }) => {
    const [ { description }, handleValueChange, resetFormValue ] = useForm({
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description.trim()) {
            const newTodo = {
                id: new Date().getTime(),
                description,
                isDone: false
            };
            handleAddTodo(newTodo);
            resetFormValue();
        }
    };

    return (
        <Fragment>
            <h4>Add todo</h4>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    type="text"
                    name="description"
                    placeholder="To do..."
                    autoComplete="off"
                    value={description}
                    onChange={handleValueChange} />

                <div className="d-grid mt-2">
                    <button
                        disabled={!description.trim()}
                        type="submit"
                        className="btn btn-outline-dark btn-sm">
                        Add
                    </button>
                </div>
            </form>
        </Fragment>
    );
});

TodoAdd.propTypes = {
    handleAddTodo: PropTypes.func.isRequired
};

export default TodoAdd;