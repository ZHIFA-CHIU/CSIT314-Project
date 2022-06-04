import React, { useState, useEffect } from 'react'
import { technicianGetNearbyJobsRequest } from '../../api';
import { Card, CardActions, CardContent, Button, Typography, Stack } from '@mui/material';
import "./LookForRepairs.css"
import { useLocation, useNavigate } from 'react-router-dom';
import useNavigator from 'react-browser-navigator'
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api'
import { TextField } from '@mui/material';
import Banner from "../../components/Banner";

export default function LookForRepairs() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const history = useLocation();
    const [id, setId] = useState(history.state.id);
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [flag, setFlag] = useState(false);
    const [directionsResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })

    const onLatChange = e => setLat(e.target.value)
    const onLonChange = e => setLon(e.target.value)

    const toJobDetails = (id, job) => () => navigate("/JobDetails", { state: { id, job } });

    const submitLocation = () => {
        technicianGetNearbyJobsRequest(lat, lon).then(
            response => {
                console.log(response.data);
                setJobs(response.data);
                setFlag(true);
            }
        ).catch(
            err => alert(err)
        );
    }

    const jobContent = () => {
        return (
            <div>
                <br />
                <Stack direction="row" spacing={4} justifyContent="center">
                    <Typography variant="h4">
                        Distance:  {distance}
                    </Typography>
                    <Typography variant="h4">
                        Duration:  {duration}
                    </Typography>
                </Stack>
                <br />
                {flag ?
                    jobs.map(job => {
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
                        function clearRoute() {
                            setDirectionsResponse(null)
                            setDistance('')
                            setDuration('')
                        }
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
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={toJobDetails(id, job)}>Detail</Button>
                                <Button size="small" variant='outlined' onClick={calculateRoute}>Calculate Route</Button>
                                <Button size="small" variant='outlined' onClick={clearRoute}>Clear Route</Button>
                            </CardActions>
                        </Card>
                    })
                    :
                    <h1>No Jobs were found</h1>}
            </div>
        )
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

    return isLoaded ? (
        <div className='look-for-repairs'>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            <div className='ui center aligned container' style={{ minWidth: "400px", maxWidth: "400px" }}>
                <h1>Current Location</h1>
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
            {flag ?
                jobContent()
                :

                <div className='input-field'>
                    <TextField id="lat" label="Latitude" variant="outlined" sx={{ minWidth: 500 }}
                        value={lat} onChange={onLatChange} />
                    <TextField id="lon" label="Longitude" variant="outlined" sx={{ minWidth: 500 }}
                        value={lon} onChange={onLonChange} />

                    <Button sx={{ minWidth: 300 }} variant="contained" onClick={submitLocation}>Submit</Button>
                </div>
            }
        </div>
    ) : <></>
}
