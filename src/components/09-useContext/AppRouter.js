import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import NavBar from "./NavBar";

function AppRouter() {
    return(
        <BrowserRouter>
            <NavBar />
            <div className="m-4">
                <Routes>
                    <Route path="/" element={<HomeScreen />}></Route>
                    <Route path="/about" element={<AboutScreen />}></Route>
                    <Route path="/login" element={<LoginScreen />}></Route>
                    <Route path="*" element={<HomeScreen />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;