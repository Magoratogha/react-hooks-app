import { useState } from "react";
import AppRouter from "./AppRouter";
import './styles.css';
import { UserContext } from "./UserContext";

function MainApp() {

    const [user, setUser] = useState({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <AppRouter />
        </UserContext.Provider>

    );
}

export default MainApp;