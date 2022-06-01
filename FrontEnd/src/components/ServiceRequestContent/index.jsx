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
 * @param customerId customerId to submit with job request
 * @returns {JSX.Element}
 */
export default function ServiceRequestContent({customerId}) {

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
        serviceRequest(customerId,location, data).then(
            response => {
                alert("Service has been requested");
                navigate("/SearchTechnician", {state: {"jobId": response.data.id}});
            }
        ).catch(
            error => alert(error)
        )
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

            <h1>Please enter request details</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>
                <p style={{textAlign: "left"}}>Location</p>
                <LoadScript
                    googleMapsApiKey="AIzaSyDc-QRg4oP9XgMlw-PfXo7IDOyXPcwp8js"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                    >
                        { /* Child components, such as markers, info windows, etc. */}
                        <Marker position={center}/>
                    </GoogleMap>
                </LoadScript>
                <br/>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <p style={{textAlign: "left"}}>Type of mechanical failure</p>
                    <select {...register("repairCategory")}>
                        <option value="Brakes fail">Brakes fail</option>
                        <option value="Tires">Tires</option>
                        <option value="Steering">Suspension/ Steering</option>
                        <option value="Lights">Lights</option>
                        <option value="Engine_transmission">Engine and Transmission Problems</option>
                        <option value="Battery">Battery</option>
                        <option value="Other">Other/ I don't know</option>
                    </select>
                    {/* <p style={{textAlign:"left"}}>Select vehicle</p>
                    <select {...register("vehicle")}>
                        <option value="nonVehicle">None</option>
                        <option value="vehicle1">Vehicle 1</option>
                        <option value="vehicle2">Vehicle 2</option>
                        <option value="vehicle3">Vehicle 3</option>
                    </select>*/}

                    <p style={{textAlign: "left"}}>Additional Information</p>
                    <textarea rows="5" placeholder="Additional Information"
                              {...register("additionalInfo", {
                                  maxLength: 200
                              })} />
                    {errors?.add_info?.type === "maxLength" && (
                        <p>Addition information cannot exceed 200 characters</p>
                    )}
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}
