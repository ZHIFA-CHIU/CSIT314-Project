import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import useNavigator from 'react-browser-navigator'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {getJobDetailsRequest, serviceRequest, getTechnicianDetailsRequest} from '../../api'

import "./Request.css"
import {useNavigate} from "react-router-dom";
import Banner from "../Banner";

/**
 * Content for the service request page
 * @param jobId customerId to submit with job request
 * @returns {JSX.Element}
 */

export default function RepairUnderwayContent({jobId}) {
    const [technicianFirstName, setTechnicianFirstName] = useState("");
    const [technicianLastName, setTechnicianLastName] = useState("");
    const [technicianRating, setTechnicianRating] = useState("");
    const fetchJobStatus = () => {
        getJobDetailsRequest(jobId).then(
            response => {
                if (response.data.status === "COMPLETED") {
                    clearInterval(isChanging);
                    isChanging = null;
                    navigate("/RepairComplete", {state: {"jobId": jobId}});
                }
            }
        )
    }

    const getTechnicianDetails = () => {
        getJobDetailsRequest(jobId).then(
            response => {
               setTechnicianFirstName(response.data.technician.firstName)
               setTechnicianLastName(response.data.technician.lastName)
               setTechnicianRating(response.data.technician.avgRating)
            }
        )
    }

    const navigate = useNavigate();
    let isChanging;

    useEffect(() => {
        getTechnicianDetails()
        if (!isChanging) {
            isChanging = setInterval(fetchJobStatus, 1000);
        }
    }, [])

    return (
        <div>
            <Banner />
            <h1>Repair Underway</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>
            <div>
                Technician {`${technicianFirstName} ${technicianLastName}`} is on their way <br />
                Rating: {technicianRating} / 5
            </div   >
                <Button
                    type="submit"
                    onClick={() => alert("Call 000")}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Call Emergency Services
                </Button>
            </div>
        </div>
    )
}
