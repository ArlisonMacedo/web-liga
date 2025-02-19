import { BrowserRouter, Routes as Embrace, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CreateTeam } from "./pages/createTeam";
import { CreatePlayer } from "./pages/createPlayer";


export function Routes() {
    return (
        <BrowserRouter>
            <Embrace>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createteam" element={<CreateTeam />} />
                <Route path="/createplayer/:teamId" element={<CreatePlayer />} />
            </Embrace>
        </BrowserRouter>
    )
}