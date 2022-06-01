import React, {useState, useEffect} from 'react'
import { technicianGetNearbyJobsRequest} from '../../api';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./LookForRepairs.css"
import {useLocation, useNavigate} from 'react-router-dom';
import useNavigator from 'react-browser-navigator'
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import {TextField} from '@mui/material';
import Banner from "../../components/Banner";

export default function LookForRepairs() {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();
    const history = useLocation();
    const [id, setId] = useState(history.state.id);
    const [lat, setLat] = useState("");
    const [lon, setLon] = useState("");
    const [flag, setFlag] = useState(false);

    const onLatChange = e => setLat(e.target.value)
    const onLonChange = e => setLon(e.target.value)

    const toJobDetails = (id, job) => () => navigate("/JobDetails", {state: {id, job}});

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
                {flag ?
                    jobs.map(job => {
                        return <Card sx={{minWidth: 500}} key={job.id}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Job {job.id}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    Customer: {`${job.customer.firstName} ${job.customer.lastName}`}
                                </Typography>
                                <Typography variant="body1">
                                    Category: {job.repairCategory}
                                </Typography>
                                <Typography variant="body2">
                                    Distance: 2km
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" variant='outlined' onClick={toJobDetails(id, job)}>Detail</Button>
                            </CardActions>
                        </Card>
                    })
                    :
                    <h1>No Jobs were found</h1>}
            </div>
        )
    }
    let {getCurrentPosition} = useNavigator();
    let location = {
        lat: getCurrentPosition?.coords.latitude,
        lon: getCurrentPosition?.coords.longitude
    }
    const locationButton = document.createElement("updateLocation");
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

    return (
        <div className='look-for-repairs'>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id}/>
            {flag ?
                jobContent()
                :
                <div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "400px"}}>
                    <h1>Current Location</h1>
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

                    <div className='input-field'>
                        <TextField id="lat" label="Latitude" variant="outlined" sx={{minWidth: 500}}
                                   value={lat} onChange={onLatChange} />
                        <TextField id="lon" label="Longitude" variant="outlined" sx={{minWidth: 500}}
                                   value={lon} onChange={onLonChange} />

                        <Button sx={{minWidth: 300}} variant="contained" onClick={submitLocation}>Submit</Button>
                    </div>
                </div>
            }
        </div>
    )
}
