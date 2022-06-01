import React, { useState } from 'react'
import Banner from '../../components/Banner'
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {closeJob, technicianAcceptJobRequest} from '../../api';

export default function JobDetails() {
    const history = useLocation();
    const [id, setId] = useState(history.state.id);
    const [job, setJob] = useState(history.state.job);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);
    const [flag, setFlag] = useState(false);

    const acceptJob = (jobId, technicianId) => technicianAcceptJobRequest(jobId, technicianId).then(
        response => {
            alert("Job accepted");
            setFlag(true);
        }
    ).catch(
        err => alert(err)
    )


    const declineJob = () => {
        navigate("/LookForRepairs", { state: { id } });
    }

    const finishJob = (jobId) => {
        closeJob(jobId).then((
            response => {
                alert("Job closed");
                navigate("/TechnicianDashboard", { state: { id } })
            }
        ))
    }


    return (
        <div>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id}/>
            <Card sx={{ minWidth: 275, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Job Details
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Customer: {`${job.customer.firstName} ${job.customer.lastName}`}
                    </Typography>
                    <Typography variant="body1">
                        Location: {`${job.customerLatitude} ${job.customerLongitude}`}
                        <br />
                        Repair Category: {job.repairCategory}
                        <br />
                        Additional Information: {job.additionalInfo}
                    </Typography>
                </CardContent>
                {
                    flag ?
                        <CardActions>
                            <Button size="small" color='success' onClick={() => finishJob(job.id)}>Finish Job</Button>
                        </CardActions>
                        :
                        <CardActions>
                            <Button size="small" onClick={() => acceptJob(job.id, id)}>Accept</Button>
                            {"    "}
                            <Button size="small" color='error' onClick={() => declineJob(id)}>Decline</Button>
                        </CardActions>
                }
            </Card>
        </div>
    )
}
