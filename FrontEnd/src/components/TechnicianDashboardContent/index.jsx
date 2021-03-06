import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material'
import "./TechnicianDashboard.css";


const TechnicianDashboard = () => {
    const history = useLocation();
    let [id] = useState(history.state.id);
    console.log(id);

    const navigate = useNavigate();

    const navLookForRepair = (e) => {
        navigate("/LookForRepairs", { state: { id } });
    }

    const navRepairHistory = (e) => {
        navigate('/technicianJobs', { state: { id } });
    }

    const navUpdateDetails = (e) => {
        navigate("/TechnicianDetail", { state: { id } });
    }

    const navAddBank = (e) => {
        navigate("/addBank", {state: {id}});
    }

    const navReview = (e) => {
        navigate('/TechnicianRating', {state: {id}});
    }

    return (
        <div id='container'>
            <Button variant="outlined" size='large' style={{ height: "20.25%" }} onClick={navLookForRepair}>Look for Repairs</Button><br />

            <Button variant="outlined" size="large" style={{ height: "20.25%" }} onClick={navRepairHistory}>Repair History</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%" }} onClick={navUpdateDetails}>Update My Details</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navAddBank}>Add bank detail</Button><br />

            <Button variant="outlined" size='large' style={{ height: "20.25%"}} onClick={navReview}>Rating and review</Button><br />
        </div>
    );
}

export default TechnicianDashboard;