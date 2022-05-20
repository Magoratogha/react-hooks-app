import { Fragment, useContext } from "react";
import { UserContext } from "./UserContext";

function HomeScreen() {

    const { user } = useContext(UserContext);

    return (
        <Fragment>
            <h1>HomeScreen</h1>
            <hr></hr>
            <pre>{ JSON.stringify(user, null, 3) }</pre>
        </Fragment>
    );
}

export default HomeScreen;