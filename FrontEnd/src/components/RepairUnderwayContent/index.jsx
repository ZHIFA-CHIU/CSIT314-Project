import React, {useEffect} from 'react'
import {AppBar, Toolbar, Typography, Button} from '@mui/material'
import {useForm} from 'react-hook-form'
import useNavigator from 'react-browser-navigator'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {serviceRequest} from '../../api'

import "./Request.css"
import {useNavigate} from "react-router-dom";

/**
 * Content for the service request page
 * @param jobId customerId to submit with job request
 * @returns {JSX.Element}
 */
export default function RepairUnderwayContent({jobId}) {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const goBackPage = () => {
        window.history.back()
    }

    const navigate = useNavigate();

    const onSubmit = (data) => {
        navigate("/RepairComplete", {state: {"jobId": jobId}});
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

            <h1>Repair Underway</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>

                <Button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Call Emergency Services
                </Button>

                <Button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Pay Now
                </Button>

            </div>
        </div>
    )
}
