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
import Receipt from "../pages/Receipt";
import Membership from "../pages/Membership";
import RepairUnderway from "../pages/RepairUnderway";
import RepairComplete from "../pages/RepairComplete";
import SearchTechnician from "../pages/SearchTechnician";
import FoundTechnician from "../pages/FoundTechnician";


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
        path: "RepairComplete",
        element: <RepairComplete />
    },
    {
        path: "RepairUnderway",
        element: <RepairUnderway />
    },
    {
        path: "SearchTechnician",
        element: <SearchTechnician />
    },
    {
        path: "FoundTechnician",
        element: <FoundTechnician />
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
        path: "/Membership",
        element: <Membership />
    },
    {
        path: "CustomerRating",
        element: <CustomerRating />
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
        path: "/Receipt",
        element: <Receipt />
    }
];
