import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Signup from "../pages/Signup"
import Login from "../pages/Login";
import CreateAccountTechnician from "../pages/CreateAccountTechnician/CreateAccountTechnician";
import AddVehicle from "../pages/AddVehicle/AddVehicle"

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
        path: "AddVehicle",
        element: <AddVehicle />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];