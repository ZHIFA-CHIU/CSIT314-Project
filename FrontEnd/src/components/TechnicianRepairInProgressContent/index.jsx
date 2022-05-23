import React, { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'
import { closeJob } from '../../api';
import {useLocation, useNavigate} from 'react-router-dom';

export default function TechnicianRepairInProgressContent() {
    let history = useLocation();
    //let [ jobId, _ ] = useState(history.state.jobId);

    const navigate = useNavigate();

    const closeJobRequest = (e) => {
        //api to close job, will uncomment when previous technician repair pages are available
        //to provide state with jobId

        // closeJob(jobId).then(
        //     response => {
        //         navigate("/TechnicianDashboard");
        //     }
        // ).catch(
        //     error => {
        //         alert(error);
        //     }
        // )
        navigate("/TechnicianDashboard");
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

            <Typography component="h1" variant="h5">
                Repair In Progress
            </Typography>

            <Button variant="contained" sx={{ mt: 3, mb: 2 }} onClick={closeJobRequest}>Repair Complete</Button>
        </Box>
    );
}
