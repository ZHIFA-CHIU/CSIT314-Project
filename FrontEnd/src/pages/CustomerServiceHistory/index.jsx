import React, { useState, useEffect } from 'react'
import Banner from '../../components/Banner'
import { useLocation } from 'react-router-dom';
import { getCustomerServiceHsitory } from '../../api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./CustomerServiceHistory.css"

export default function CustomerServiceHistory() {
    const history = useLocation();
    const [id, setId] = useState(history.state.customerId);
    const [flag, setFlag] = useState(false);
    const [jobs, setJobs] = useState([]);

    const searchJobs = () => {
        getCustomerServiceHsitory(id)
            .then(data => {
                setJobs(data.data);
                setFlag(true);
            }
            ).catch(
                err => alert(err)
            );
    }

    useEffect(() => {
        searchJobs()
    }, [])

    const jobContent = () => {
        return (
            <div>
                {flag ?
                    jobs.map(job => {
                        return <Card sx={{ minWidth: 500, m: 2 }} key={job.id}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Job {job.id}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Technician: {`${job.technician.firstName} ${job.technician.lastName}`}
                                </Typography>
                                <Typography variant="body1">
                                    Category: {job.repairCategory}
                                </Typography>
                                <Typography variant="body2">
                                    Status: {job.status}
                                </Typography>
                                <Typography variant="body2">
                                    Start Time: {job.startTime}
                                </Typography>
                                <Typography variant="body2">
                                    Finish Time: {job.finishTime}
                                </Typography>
                                <Typography variant="body2">
                                    Price: {job.jobPrice}
                                </Typography>
                            </CardContent>
                        </Card>
                    })
                    :
                    <h1>No Jobs were found</h1>}
            </div>
        )
    }

    return (
        <div>
            <Banner dashboard={true} id={id} to={"CustomerDashboard"} />
            <div className='service-history-container'>
                {jobContent()}
            </div>
        </div>
    )
}
