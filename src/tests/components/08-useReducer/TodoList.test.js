import { queryAllByAttribute, render } from "@testing-library/react";
import TodoList from "../../../components/08-useReducer/TodoList";
import { todosMock } from "../../mocks/todos";

describe('Test on <TodoList />', () => {
    
    const handleToggleMock = jest.fn();
    const handleDeleteMock = jest.fn();

    test('should render properly', () => {
        const { container } = render(<TodoList 
            todos={ todosMock }
            handleToggle={ handleToggleMock }
            handleDelete={ handleDeleteMock } />);
        expect(container).toMatchSnapshot();
    });

    test('should contains 2 todo items', () => {
        const { container } = render(<TodoList 
            todos={ todosMock }
            handleToggle={ handleToggleMock }
            handleDelete={ handleDeleteMock } />);
        const todoItems = queryAllByAttribute('class', container, 'list-group-item', { exact: true });
        expect(todoItems.length).toBe(todosMock.length);
    });
});