import { Fragment, useContext } from "react";
import { UserContext } from "./UserContext";

function LoginScreen() {

    const { setUser } = useContext(UserContext);

    return (
        <Fragment>
            <h1>LoginScreen</h1>
            <hr></hr>
            <button 
                onClick={ () => setUser({ id: 1234, name: 'Magora' })}
                className="btn btn-outline-dark">
                    Login
            </button>
        </Fragment>
    );
}

export default LoginScreen;