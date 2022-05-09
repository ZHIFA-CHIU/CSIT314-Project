import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material'
import "./CustomerDashboard.css";


const CustomerDashboard = () => {
   const navigate = useNavigate();

   const navRequestRepair = (e) => {
      navigate('/home');
   }

   const navManageSubcript = (e) => {
      navigate('/home');
   }

   const navMyVehicles = (e) => {
      navigate('/home');
   }

   const navServiceHistory = (e) => {
      navigate('/home');
   }

   const navUpdateDetails = (e) => {
      navigate('/home');
   }

   const navUpdatePayDetails = (e) => {
      navigate('/home');
   }

   return (
      <div id='container'>
         <Button variant="outlined" size='large' style={{ height: "13.5%"}} onClick={navManageSubcript}>Request a Repair</Button><br />

         <Button variant="outlined" size='large' style={{ height: "13.5%"}} onClick={navManageSubcript}>Manage Subscription</Button><br />

         <Button variant="outlined" size="large" style={{ height: "13.5%"}} onClick={navMyVehicles}>My Vehicles</Button><br />

         <Button variant="outlined" size='large' style={{ height: "13.5%"}} onClick={navServiceHistory}>Service History</Button><br />

         <Button variant="outlined" size='large' style={{ height: "13.5%"}} onClick={navUpdateDetails}>Update My Details</Button><br />
         
         <Button variant="outlined" size='large' style={{ height: "13.5%"}} onClick={navUpdatePayDetails}>Update Payment Details</Button><br />
      </div>
   );
}

export default CustomerDashboard;