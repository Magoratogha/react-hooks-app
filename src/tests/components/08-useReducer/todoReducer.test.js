import todoReducer from "../../../components/08-useReducer/todoReducer";
import { todosMock } from "../../mocks/todos";

describe('Tests on todoReducer.js', () => {

    test('should return the default state', () => {
        const state = todoReducer(todosMock, {});
        expect(state).toEqual(todosMock);
    });

    test('should add a todo in the state', () => {
        const newTodo = {
            id: 3,
            description: 'To learn AWS',
            isDone: false
        };
        const state = todoReducer(todosMock, {
            payload: newTodo,
            type: 'add'
        });
        expect(state).toEqual([...todosMock, newTodo]);
    });

    test('should delete a todo in the state', () => {
        const todoId = 1;
        const state = todoReducer(todosMock, {
            payload: todoId,
            type: 'delete'
        });
        expect(state).toEqual(todosMock.filter((todo) => todo.id !== todoId));
    });

    test('should toggle a todo isDone value in the state', () => {
        const todoId = 2;
        const previousIsDoneValue = todosMock.find((todo) => todo.id === todoId).isDone;
        const state = todoReducer(todosMock, {
            payload: todoId,
            type: 'toggle'
        });
        expect(state.find((todo) => todo.id === todoId).isDone).toBe(!previousIsDoneValue);
    });
});