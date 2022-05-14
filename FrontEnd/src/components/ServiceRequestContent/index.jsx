import React, { useEffect } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import {useForm} from 'react-hook-form'
import useNavigator from 'react-browser-navigator'
import { GoogleMap,LoadScript, Marker} from '@react-google-maps/api'

import  "./Request.css"

export default function ServiceRequestContent() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const onSubmit = data => console.log(data);
    const goBackPage = () => {
        window.history.back()
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data);
    };

    let { getCurrentPosition } = useNavigator();
    // let location = {
    //     latitude: getCurrentPosition?.coords.latitude,
    //     longitude: getCurrentPosition?.coords.longitude}
    useEffect(()=> {
        if (getCurrentPosition !== undefined && getCurrentPosition !== null) {
            console.log("latitude: ", getCurrentPosition.coords.latitude, ", longitude: ", getCurrentPosition.coords.longitude);
            // alert(JSON.stringify(location));
        }
    }, [getCurrentPosition]);

    const containerStyle = {
        marginLeft:'auto',
        marginRight:'auto',
        // width: '500px',
        height: '500px'
    };

    const center = {
        lat: getCurrentPosition?.coords.latitude,
        lng: getCurrentPosition?.coords.longitude
    };



    //console.log(watch("example"));
    // console.log(errors);
    return (
        <div>
            <AppBar position='static' >
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Back
                    </button>
                    <Typography align='center' sx={{ flexGrow: 1 }}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Next
                    </button>
                </Toolbar>
            </AppBar>

            <h1>Please enter request details</h1>
            {/*<p style={{textAlign:"center"}}>Latitude: {getCurrentPosition?.coords.latitude}</p>*/}
            {/*<p style={{textAlign:"center"}}>Longitude: {getCurrentPosition?.coords.longitude}</p>*/}
            {/*<br />*/}
            <div className='ui center aligned container' style={{minWidth:"400px", maxWidth:"684px"}} >
                <p style={{textAlign:"left"}}>Location</p>
                <LoadScript
                    googleMapsApiKey="AIzaSyDc-QRg4oP9XgMlw-PfXo7IDOyXPcwp8js"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={15}
                    >
                        { /* Child components, such as markers, info windows, etc. */ }
                        <Marker position={center}/>
                    </GoogleMap>
                </LoadScript>
                <br />


                <form onSubmit={handleSubmit(onSubmit)}>
                    <p style={{textAlign:"left"}}>Type of mechanical failure</p>
                    <select {...register("failure_type")}>
                        <option value="brakes fail">Brakes fail</option>
                        <option value="tires">Tires</option>
                        <option value="steering">Suspension/ Steering</option>
                        <option value="lights">Lights</option>
                        <option value="engine_transmission">Engine and Transmission Problems</option>
                        <option value="battery">Battery</option>
                        <option value="Other">Other/ I don't know</option>
                    </select>
                    <p style={{textAlign:"left"}}>Select vehicle</p>
                    <select {...register("vehicle")}>
                        <option value="nonVehicle">None</option>
                        <option value="vehicle1">Vehicle 1</option>
                        <option value="vehicle2">Vehicle 2</option>
                        <option value="vehicle3">Vehicle 3</option>
                    </select>

                    <p style={{textAlign:"left"}}>Additional Information</p>
                    <textarea  rows="5" placeholder="Additional Information"
                               {...register("add_info", {
                                   maxLength: 200
                               })} />
                    {errors?.add_info?.type === "maxLength" && (
                        <p>Addition information cannot exceed 200 characters</p>
                    )}
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}
