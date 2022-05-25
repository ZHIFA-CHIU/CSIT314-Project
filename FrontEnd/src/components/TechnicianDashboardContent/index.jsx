import React, {useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material'
import "./TechnicianDashboard.css";


const TechnicianDashboard = () => {
    const history = useLocation();
    let [id, _] = useState(history.state.id);
    console.log(id);

    const navigate = useNavigate();

    const navLookForRepair = (e) => {
        //navigate('/');
    }

    const navRepairHistory = (e) => {
        //navigate('/');
    }

    const navUpdateDetails = (e) => {
        navigate("/TechnicianDetail", {state: {id}});
    }

    const navUpdatePayDetails = (e) => {
        //navigate('/');
    }

    return (
        <div id='container'>
            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navLookForRepair}>Look for Repairs</Button><br />

            <Button variant="outlined" size="large" style={{ height: "20.25%"}} onClick={navRepairHistory}>Repair History</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navUpdateDetails}>Update My Details</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navUpdatePayDetails}>Update Payment Details</Button><br />
        </div>
    );
}

export default TechnicianDashboard;