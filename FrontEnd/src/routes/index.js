import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TechnicianLogin from "../pages/TechnicianLogin";
import TechnicianSignup from "../pages/TechnicianSignup";
import ServiceRequest from "../pages/ServiceRequest";
import CustomerDashboard from "../pages/CustomerDashboard";
import TechnicianDashboard from "../pages/TechnicianDashboard";
import TechnicianRepairInProgress from "../pages/TechnicianRepairInProgress";

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
        path: "TechnicianSignup",
        element: <TechnicianSignup />
    },
    {
        path: "TechnicianLogin",
        element: <TechnicianLogin />
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
        path: "TechnicianRepairInProgress",
        element: <TechnicianRepairInProgress />
    },
    {
        path: "/",
        element: <Navigate to="/home" />
    }
];
