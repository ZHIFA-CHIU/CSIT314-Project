import { Navigate } from "react-router-dom";
import Home from "../pages/Home/Home"
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import TechnicianLogin from "../pages/TechnicianLogin";
import TechnicianSignup from "../pages/TechnicianSignup";
import ServiceRequest from "../pages/ServiceRequest";
import CustomerDashboard from "../pages/CustomerDashboard";
import TechnicianDashboard from "../pages/TechnicianDashboard";
import CustomerRating from "../pages/CustomerRating";
import VehList from "../pages/Vehicle/";
import AddVehicle from "../pages/AddVehicle";
import Payment from "../pages/Payment";
import CustomerDetail from "../pages/CustomerDetail";
import TechnicianDetail from "../pages/TechnicianDetail";
import TechnicianRating from "../pages/TechnicianRating";

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
        path: "CustomerRating",
        element: <CustomerRating />
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
    },
    {
        path: "/payment",
        element: <Payment />
    },
    {
        path: "/CustomerDetail",
        element: <CustomerDetail />
    },
    {
        path: "/TechnicianDetail",
        element: <TechnicianDetail />
    },
    {
        path: "TechnicianRating",
        element: <TechnicianRating />
    }
];
