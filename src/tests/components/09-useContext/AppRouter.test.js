import { render } from "@testing-library/react";
import AppRouter from "../../../components/09-useContext/AppRouter";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test on <AppRouter />', () => {

    const user = {
        name: 'Magora',
        email: 'test@test.com'
    };

    test('should render properly', () => {
        const { container } = render(
            <UserContext.Provider value={ user }>
                <AppRouter />
            </UserContext.Provider>);
        expect(container).toMatchSnapshot();
    });
});