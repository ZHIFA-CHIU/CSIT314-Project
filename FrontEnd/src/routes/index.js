import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login";
import CreateAccountTechnician from "../components/CreateAccountTechnician";

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
        path: "CreateAccountTechnician",
        element: <CreateAccountTechnician />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];