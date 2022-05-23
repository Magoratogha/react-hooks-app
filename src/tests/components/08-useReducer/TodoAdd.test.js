import { render, screen } from "@testing-library/react";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";
import userEvent from "@testing-library/user-event";

describe('Test on <TodoAdd />', () => {
    
    const user = userEvent.setup();
    const handleAddTodoMock = jest.fn();
    
    test('should render properly', () => {
        const { container } = render(<TodoAdd handleAddTodo={ handleAddTodoMock }/>);
        expect(container).toMatchSnapshot();
    });
    
    test('should not call handleAddTodo function if value is empty', async () => {
        render(<TodoAdd handleAddTodo={ handleAddTodoMock }/>);
        const submitButton = screen.queryByText('Add', { selector: 'button' });
        await user.click(submitButton);
        expect(handleAddTodoMock).not.toHaveBeenCalled();
    });
    
    test('should call handleAddTodo function if value is not empty', async () => {
        render(<TodoAdd handleAddTodo={ handleAddTodoMock }/>);
        const formInput = screen.queryByPlaceholderText('To do...', { exact: true });
        const submitButton = screen.queryByText('Add', { selector: 'button' });
        await user.type(formInput, 'Test');
        await user.click(submitButton);
        expect(handleAddTodoMock).toHaveBeenCalledWith({
            id: expect.any(Number),
            description: 'Test',
            isDone: false
        });
        expect(formInput).toHaveValue('');
    });
});
