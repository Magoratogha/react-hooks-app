import { Fragment, useContext } from "react";
import { UserContext } from "./UserContext";

function AboutScreen() {

    const { user, setUser } = useContext(UserContext);

    return (
        <Fragment>
            <h1>AboutScreen</h1>
            <hr></hr>
            <pre>{ JSON.stringify(user, null, 3) }</pre>
            <button 
                onClick={ () => setUser({})}
                className="btn btn-outline-danger">
                    LogOut
            </button>
        </Fragment>
    );
}

export default AboutScreen;