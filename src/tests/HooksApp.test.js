import { render } from "@testing-library/react";
import HooksApp from "../HooksApp";

describe('Test for <HooksApp />', () => {
    
    test('should render the component properly', () => {
        const { container } = render(<HooksApp />);
        expect(container).toMatchSnapshot();
    });
});