import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RealExampleRef from "../../../components/04-useRef/RealExampleRef";

describe('Test on <RealExampleRef />', () => {

    const user = userEvent.setup();

    test('should render properly', () => {
        const { container } = render(<RealExampleRef />);
        expect(container).toMatchSnapshot();
    });

    test('should render <MultipleCustomHooks />', async () => {
        render(<RealExampleRef />);
        const buttonElement = screen.queryByText('Show/Hide', { selector: 'button' });
        await user.click(buttonElement);
        expect(screen.getByText('Breaking Bad quotes', {selector: 'h1'})).toBeTruthy();
    });
});