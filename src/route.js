import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Activity from "./pages/Activity";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
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
                element: <Profile />,
                children : [
                    {
                        path: "",
                        element : "Henüz yazışma yok."
                    },
                    {
                        path: "replies",
                        element : "Henüz yanıt yok."
                    },
                    {
                        path: "reposts",
                        element : "Henüz yeniden paylaşım yok."
                    }
                ]
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default routes;