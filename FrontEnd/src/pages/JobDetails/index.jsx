import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography, Stack } from '@mui/material';
import { closeJob, technicianAcceptJobRequest } from '../../api';
import useNavigator from 'react-browser-navigator'
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api'

const google = window.google

export default function JobDetails() {
    const history = useLocation();
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [id, setId] = useState(history.state.id);
    const [job, setJob] = useState(history.state.job);
    const navigate = useNavigate();
    const [accepted, setAccepted] = useState(false);
    const [flag, setFlag] = useState(false);
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const acceptJob = (jobId, technicianId) => technicianAcceptJobRequest(jobId, technicianId).then(
        response => {
            alert("Job accepted");
            setFlag(true);
        }
    ).catch(
        err => alert(err)
    )


    const declineJob = () => {
        navigate("/LookForRepairs", { state: { id } });
    }

    const finishJob = (jobId) => {
        closeJob(jobId).then((
            response => {
                alert("Job closed");
                navigate("/TechReceipt", { state: { "jobId": jobId } });
            }
        ))
    }
    async function calculateRoute() {
        const currentLocation = `${location.lat}, ${location.lon}`
        const customerLocation = `${job.customerLatitude}, ${job.customerLongitude}`
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
            origin: currentLocation,
            destination: customerLocation,
            travelMode: google.maps.TravelMode.DRIVING,
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    let { getCurrentPosition } = useNavigator();

    let location = {
        lat: getCurrentPosition?.coords.latitude,
        lon: getCurrentPosition?.coords.longitude
    }
    useEffect(() => {
        if (getCurrentPosition !== undefined && getCurrentPosition !== null) {
            console.log(location)
            setLat(location.lat)
            setLon(location.lon)
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
    useEffect(() => {
        calculateRoute().then()
    });


    return isLoaded ? (
        <div>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            <Card sx={{ minWidth: 275, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        Job Details
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Customer: {`${job.customer.firstName} ${job.customer.lastName}`}
                    </Typography>
                    <Typography variant="body1">
                        Location: {`${job.customerLatitude} ${job.customerLongitude}`}
                        <br />
                        Repair Category: {job.repairCategory}
                        <br />
                        Additional Information: {job.additionalInfo}
                    </Typography>
                </CardContent>
                {
                    flag ?
                        <CardActions>
                            <Button size="small" color='success' onClick={() => finishJob(job.id)}>Finish Job</Button>
                        </CardActions>
                        :
                        <CardActions>
                            <Button size="small" onClick={() => acceptJob(job.id, id)}>Accept</Button>
                            {"    "}
                            <Button size="small" color='error' onClick={() => declineJob(id)}>Decline</Button>
                        </CardActions>
                }
            </Card>
            <div className='ui center aligned container' style={{ minWidth: "400px", maxWidth: "400px" }}>
                <Stack direction="row" spacing={4} justifyContent="center">
                    {/*<Button size="small" variant='outlined' onClick={calculateRoute}>Calculate Route</Button>*/}
                    <Typography variant="h4">
                        Distance:  {distance}
                    </Typography>
                    <Typography variant="h4">
                        Duration:  {duration}
                    </Typography>
                </Stack>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker position={center} />
                    {directionsResponse && (
                        <DirectionsRenderer directions={directionsResponse} />
                    )}
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}
