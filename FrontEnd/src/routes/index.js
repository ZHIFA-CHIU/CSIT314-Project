import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
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
        path: "Signup",
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
