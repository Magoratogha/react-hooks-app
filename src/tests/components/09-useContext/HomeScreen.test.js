import { render } from "@testing-library/react";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Test on <HomeScreen />', () => { 

    const user = {
        name: 'Magora',
        email: 'test@test.com'
    }

    test('should render properly', () => {
        const { container } = render(
            <UserContext.Provider value={{ user }}>
                <HomeScreen />
            </UserContext.Provider>);
        expect(container).toMatchSnapshot();
    });
});