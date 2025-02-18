import { BrowserRouter, Routes as Embrace, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CreateTeam } from "./pages/createTeam";


export function Routes() {
    return (
        <BrowserRouter>
            <Embrace>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createteam" element={<CreateTeam />} />
            </Embrace>
        </BrowserRouter>
    )
}