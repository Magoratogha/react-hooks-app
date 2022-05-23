import { render } from "@testing-library/react";
import TodoApp from "../../../components/08-useReducer/TodoApp";

describe('Test on <TodoApp />', () => { 

    test('should render properly', () => {
        const { container } = render(<TodoApp />);
        expect(container).toMatchSnapshot();
    });
});