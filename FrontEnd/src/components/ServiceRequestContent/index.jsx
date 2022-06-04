import React, {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import useNavigator from 'react-browser-navigator'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
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

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

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

    return isLoaded? (
        <div>
            <h1>Please enter request details</h1>
            <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>
                <p style={{textAlign: "left"}}>Location</p>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker position={center}/>
                </GoogleMap>
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
    ) : <></>
}
