import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button} from '@mui/material'
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
    // getting customer ID
    let history = useLocation();
    let [id, _] = useState(history.state.id);

    const navigate = useNavigate();

    const navRequestRepair = (e) => {
        navigate('/ServiceRequest', {state: {"customerId": id}});
    }

    const navManageSubcript = (e) => {
        navigate('/Membership', {state: {"customerId": id}});
    }

    const navMyVehicles = (e) => {
        navigate('/VehList', {state: {"customerId": id}});
    }

    const navServiceHistory = (e) => {
        //navigate('/');
    }

    const navUpdateDetails = (e) => {
        navigate('/CustomerDetail', {state: {"customerId": id}});
    }

    return (
        <div id='container'>
            <Button variant="outlined" size='large' style={{height: "13.5%"}} onClick={navRequestRepair}>Request a
                Repair</Button><br/>

            <Button variant="outlined" size='large' style={{height: "13.5%"}} onClick={navManageSubcript}>Manage
                Subscription</Button><br/>

            <Button variant="outlined" size="large" style={{height: "13.5%"}} onClick={navMyVehicles}>My
                Vehicles</Button><br/>

{/*             <Button variant="outlined" size='large' style={{height: "13.5%"}} onClick={navServiceHistory}>Service */}
{/*                 History</Button><br/> */}

            <Button variant="outlined" size='large' style={{height: "13.5%"}} onClick={navUpdateDetails}>Update My
                Details</Button><br/>
        </div>
    );
}

export default CustomerDashboard;
