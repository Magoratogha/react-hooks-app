import { render, screen } from "@testing-library/react";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";
import userEvent from "@testing-library/user-event";

describe('Test on <LoginScreen />', () => { 

    const setUser = jest.fn();
    const user = userEvent.setup();

    test('should render properly', () => {
        const { container } = render(
            <UserContext.Provider value={{ setUser }}>
                <LoginScreen />
            </UserContext.Provider>);
        expect(container).toMatchSnapshot();
    });

    test('should call setUser when button is clicked', async () => {
        const userMock = { id: 1234, name: 'Magora' };
        render(
            <UserContext.Provider value={{ setUser }}>
                <LoginScreen />
            </UserContext.Provider>);
        const loginButton = screen.queryByText('Login', { selector: 'button' });
        await user.click(loginButton);
        expect(setUser).toHaveBeenCalledWith(userMock);
    });
});