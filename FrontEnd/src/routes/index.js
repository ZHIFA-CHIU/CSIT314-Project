import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";

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