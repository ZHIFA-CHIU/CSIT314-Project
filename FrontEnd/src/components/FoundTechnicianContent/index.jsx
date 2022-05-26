import React, {useEffect} from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import {useForm} from 'react-hook-form'
import useNavigator from 'react-browser-navigator'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {serviceRequest} from '../../api'

import "./Request.css"
import {useNavigate} from "react-router-dom";

/**
 * Content for the service request page
 * @param jobId jobId to submit with job request
 * @returns {JSX.Element}
 */
export default function FoundTechnicianContent({jobId}) {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const goBackPage = () => {
        window.history.back()
    }

    const navigate = useNavigate();

    let isChanging;

    useEffect(()=>{
        onSubmit()
    }, []) // <-- empty dependency array

    const checkStatus = (data) => {
        alert(jobId.technician);
        alert(jobId.status);
        if(jobId.status != "WAITING"){
            clearInterval(isChanging);
            isChanging = null;
            navigate("/RepairUnderway", {state: {"jobId": jobId}});
        }
    }

    const onSubmit = (data) => {
        alert(jobId.technician);
        alert(jobId.status);
        if(jobId.status != "WAITING"){
            navigate("/RepairUnderway", {state: {"jobId": jobId}});
        } else{
            if(!isChanging){
                isChanging = setInterval(checkStatus, 10000);
            }

        }

    };

    let {getCurrentPosition} = useNavigator();
    let location = {
        customerLatitude: getCurrentPosition?.coords.latitude,
        customerLongitude: getCurrentPosition?.coords.longitude
    }
    useEffect(() => {
        if (getCurrentPosition !== undefined && getCurrentPosition !== null) {
        }
    }, [getCurrentPosition]);

    const containerStyle = {
        marginLeft: 'auto',
        marginRight: 'auto',
        // width: '500px',
        height: '500px'
    };

    const center = {
        lat: getCurrentPosition?.coords.latitude,
        lng: getCurrentPosition?.coords.longitude
    };

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Back
                    </button>
                    <Typography align='center' sx={{flexGrow: 1}} onClick={() => goBackPage()}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Next
                    </button>
                </Toolbar>
            </AppBar>

            <h1>Technician is on the way...</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>
                onSubmit
            </div>
        </div>
    )
}
