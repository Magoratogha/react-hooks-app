import { render, screen } from "@testing-library/react";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { todosMock } from "../../mocks/todos";
import userEvent from "@testing-library/user-event";

describe('Test on <TodoListItem />', () => {

    const user = userEvent.setup();
    const handleToggleMock = jest.fn();
    const handleDeleteMock = jest.fn();

    test('should render properly', () => {
        const { container } = render(<TodoListItem
            todo={todosMock[0]}
            index={2}
            handleToggle={handleToggleMock}
            handleDelete={handleDeleteMock} />);
        expect(container).toMatchSnapshot();
    });

    test('should call the delete function', async () => {
        render(<TodoListItem
            todo={todosMock[0]}
            index={2}
            handleToggle={handleToggleMock}
            handleDelete={handleDeleteMock} />);
        const deleteButton = screen.queryByText('Delete', { selector: 'button' });
        await user.click(deleteButton);
        expect(handleDeleteMock).toHaveBeenCalledWith(todosMock[0].id);
    });

    test('should call the toggle function', async () => {
        render(<TodoListItem
            todo={todosMock[0]}
            index={2}
            handleToggle={handleToggleMock}
            handleDelete={handleDeleteMock} />);
        const toggleParagraph = screen.queryByText('3. ' + todosMock[0].description, { selector: 'p' });
        await user.click(toggleParagraph);
        expect(handleToggleMock).toHaveBeenCalledWith(todosMock[0].id);
    });

    test('should render the text properly', () => {
        render(<TodoListItem
            todo={todosMock[0]}
            index={2}
            handleToggle={handleToggleMock}
            handleDelete={handleDeleteMock} />);
        expect(screen.getByText('3. ' + todosMock[0].description, { selector: 'p' })).toBeTruthy();
    });

    test('should have the complete class if isDone property is true', () => {
        const todoMock = { ...todosMock[0], isDone: true };
        render(<TodoListItem
            todo={todoMock}
            index={2}
            handleToggle={handleToggleMock}
            handleDelete={handleDeleteMock} />);
        expect(screen.getByText('3. ' + todosMock[0].description, { selector: 'p' })).toHaveClass('completed');
    });
});