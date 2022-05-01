import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login";

export default [
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];