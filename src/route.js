import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Home from "./pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/activity",
                element: <Activity />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default routes;