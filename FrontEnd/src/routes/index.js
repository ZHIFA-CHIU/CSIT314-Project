import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import Signup from "../components/Signup";
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