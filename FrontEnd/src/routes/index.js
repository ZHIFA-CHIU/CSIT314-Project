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
import CustomerDetail from "../pages/CustomerDetail";
import TechnicianDetail from "../pages/TechnicianDetail";
import Receipt from "../pages/Receipt";
import Membership from "../pages/Membership";
import RepairUnderway from "../pages/RepairUnderway";
import RepairComplete from "../pages/RepairComplete";
import SearchTechnician from "../pages/SearchTechnician";
import AddBank from "../pages/AddBank";
import LookForRepairs from "../pages/LookForRepairs";
import JobDetails from "../pages/JobDetails";
import TechnicianJobHistory from "../pages/TechnicianJobHistory/TechnicianJobHistory";
import CustomerServiceHistory from "../pages/CustomerServiceHistory";
import TechReceipt from "../pages/TechReceipt";


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
    },
    {
        path: "/LookForRepairs",
        element: <LookForRepairs />
    },
    {
        path: "JobDetails",
        element: <JobDetails />
    },
    {
        path: "/technicianJobs",
        element: <TechnicianJobHistory />
    },
    {
        path: "/CustomerServiceHistory",
        element: <CustomerServiceHistory />
    },
    {
        path: "/addBank",
        element: <AddBank />
    },
    {
        path: "/TechReceipt",
        element: <TechReceipt />
    },
];
