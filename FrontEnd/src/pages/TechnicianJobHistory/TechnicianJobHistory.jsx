import React, { useEffect, useState } from 'react'
import { getAllTechnicianJobsRequest } from '../../api';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import Banner from "../../components/Banner";

export default function TechnicianJobHistory() {
    const [jobs, setJobs] = useState([]);
    const history = useLocation();
    const [id, setId] = useState(history.state.id);
    const [flag, setFlag] = useState(false);

    //TODO sort this out
    const searchJobs = () => {
        getAllTechnicianJobsRequest(id)
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

    /*    useEffect(() => {
            console.log(id);
            getAllTechnicianJobsRequest(id).then(
                response =>{
                    setJobs(response.data);
                }
            )
        }, [])*/

    useEffect(() => {
        console.log(jobs)
    }, [])

    const jobContent = () => {
        return (
            <div>
                {flag ?
                    jobs.map(job => {
                        return <Card sx={{ minWidth: 500 }} key={job.id}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Job {job.id}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Customer: {`${job.customer.firstName} ${job.customer.lastName}`}
                                </Typography>
                                <Typography variant="body1">
                                    Category: {job.repairCategory}
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
        <div className='look-for-repairs'>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            {jobContent()}
        </div>
    )
}
