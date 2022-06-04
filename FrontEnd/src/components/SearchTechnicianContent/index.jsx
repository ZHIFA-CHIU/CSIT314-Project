import React, {useEffect, useState} from 'react'
import useNavigator from 'react-browser-navigator'
import {getJobDetailsRequest, getNearbyTechnician} from '../../api'

import "./search.css"
import { useNavigate } from "react-router-dom";
import Banner from "../Banner";
import {Button} from "@mui/material";

/**
 * Content for the service request page
 * @param jobId jobId to submit with job request
 * @returns {JSX.Element}
 */
export default function SearchTechnicianContent({ jobId }) {
    const fetchJobStatus = () => {
        getJobDetailsRequest(jobId).then(
            response => {
                if (response.data.status === "COMPLETED") {
                    clearInterval(isChanging);
                    isChanging = null;
                    navigate("/RepairComplete", { state: { "jobId": jobId } });
                } else if (response.data.status === "INPROGRESS") {
                    clearInterval(isChanging);
                    isChanging = null;
                    navigate("/RepairUnderway", { state: { "jobId": jobId } });

                }
            }
        )

    }
    const getTech = () => {
        getNearbyTechnician(lat, lon).then(
            response => {
                setTechNum(response.data);
            }
        ).catch(
            err => alert(err)
        );
    }


    const navigate = useNavigate();
    let isChanging;
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [techNum, setTechNum] = useState(0);


    useEffect(() => {
        if (!isChanging) {
            isChanging = setInterval(fetchJobStatus, 1000);
        }
    }, [])

    let { getCurrentPosition } = useNavigator();

    let location = {
        customerLatitude: getCurrentPosition?.coords.latitude,
        customerLongitude: getCurrentPosition?.coords.longitude
    }

    useEffect(() => {
        if (getCurrentPosition !== undefined && getCurrentPosition !== null) {
            setLat(location.customerLatitude)
            setLon(location.customerLongitude)
        }
    }, [getCurrentPosition]);


    return (
        <div>
            <Banner />
            <h1>Finding a Technician...</h1>
            <div className='input-field' >
                <p>{techNum} Technicians within 50Kms</p>
                <Button sx={{ minWidth: 300 }} variant="contained" onClick={getTech}>Update</Button>
            </div>
        </div>
    )
}
