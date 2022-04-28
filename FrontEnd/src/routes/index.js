import { Navigate } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login";
import CreateAccountCustomer from "../components/Signup/CreateAccountCustomer";

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
        path: "CreateAccountCustomer",
        element: <CreateAccountCustomer />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];
