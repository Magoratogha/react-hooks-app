import { queryByAttribute, render, screen } from "@testing-library/react";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useCounter from "../../../hooks/useCounter";
import useFetch from "../../../hooks/useFetch";
jest.mock('../../../hooks/useCounter');
jest.mock('../../../hooks/useFetch');

describe('Test on <MultipleCustomHooks />', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => { }
        });
    });

    test('should render properly', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            error: null
        });
        const { container } = render(<MultipleCustomHooks />);
        expect(container).toMatchSnapshot();
    });

    test('should show data when its fetched', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Magora',
                quote: 'Hello world'
            }],
            isLoading: false,
            error: null
        });
        const { container } = render(<MultipleCustomHooks />);
        expect(queryByAttribute('class', container, 'alert', { exact: false })).toBeNull();
        expect(screen.getByText('Hello world', { selector: 'p' })).toBeTruthy();
        expect(screen.getByText('Magora', { selector: 'footer' })).toBeTruthy();
    });
});