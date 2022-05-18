import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateAccountTechnician from "../pages/CreateAccountTechnician/CreateAccountTechnician";
import ServiceRequest from "../pages/ServiceRequest";
import CustomerDashboard from "../pages/CustomerDashboard";
import TechnicianDashboard from "../pages/TechnicianDashboard";
import VehList from "../pages/Vehicle/";
import AddVehicle from "../components/VehicleContent/AddVehicle";

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
        path: "/CustomerDashboard",
        element: <CustomerDashboard />
    },
    {
        path: "TechnicianDashboard",
        element: <TechnicianDashboard />
    },
    {
        path: "VehList",
        element: <VehList />
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
