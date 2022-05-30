import React, {useEffect, useState} from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import useNavigator from 'react-browser-navigator'
import {getJobDetailsRequest, serviceRequest} from '../../api'

import "./Request.css"
import {useNavigate} from "react-router-dom";
import Banner from "../Banner";

/**
 * Content for the service request page
 * @param jobId jobId to submit with job request
 * @returns {JSX.Element}
 */
export default function SearchTechnicianContent({jobId}) {
    const fetchJobStatus = () => {
        getJobDetailsRequest(jobId).then(
            response => {
                if (response.data.status === "COMPLETED") {
                    clearInterval(isChanging);
                    isChanging = null;
                    navigate("/RepairComplete", {state: {"jobId": jobId}});
                } else if (response.data.status === "INPROGRESS") {
                    clearInterval(isChanging);
                    isChanging = null;
                    navigate("/RepairUnderway", {state: {"jobId": jobId}});

                }
            }
        )
    }

    const navigate = useNavigate();
    let isChanging;

    useEffect(() => {
        if (!isChanging) {
            isChanging = setInterval(fetchJobStatus, 1000);
        }
    }, [])

    let {getCurrentPosition} = useNavigator();

    let location = {
        customerLatitude: getCurrentPosition?.coords.latitude,
        customerLongitude: getCurrentPosition?.coords.longitude
    }

    useEffect(() => {
        if (getCurrentPosition !== undefined && getCurrentPosition !== null) {
        }
    }, [getCurrentPosition]);

    return (
        <div>
            <Banner />
            <h1>Finding a Technician...</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>
                <p>6 Technicians within 50Kms</p>
            </div>
        </div>
    )
}
