import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateAccountTechnician from "../pages/CreateAccountTechnician/CreateAccountTechnician";
import ServiceRequest from "../pages/ServiceRequest";

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
        path: "Signup",
        element: <Signup />
    },
    {
        path: "CreateAccountTechnician",
        element: <CreateAccountTechnician />
    },
    {
        path: "ServiceRequest",
        element: <ServiceRequest />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];
