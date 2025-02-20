import { BrowserRouter, Routes as Embrace, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { CreateTeam } from "./pages/createTeam";
import { CreatePlayer } from "./pages/createPlayer";
import { Dashboard } from "./pages/dashboard";
import { PrivateRoute } from "./auth/provider";
import { DashboardOwner } from "./pages/dashboardOwner";
import { EditPlayer } from "./pages/editPlayer";


export function Routes() {
    return (
        <BrowserRouter>
            <Embrace>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/createteam" element={<CreateTeam />} />
                <Route path="/createplayer/:teamId" element={
                    <PrivateRoute>
                        <CreatePlayer />
                    </PrivateRoute>
                } />
                <Route path="/dashboard/:id" element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                } />
                <Route path="/dashboardowner" element={
                    <PrivateRoute>
                        <DashboardOwner />
                    </PrivateRoute>
                } />
                <Route path="/editplayer/:idPlayer/:idTeam" element={
                    <PrivateRoute>
                        <EditPlayer />
                    </PrivateRoute>
                } />

            </Embrace>
        </BrowserRouter>
    )
}