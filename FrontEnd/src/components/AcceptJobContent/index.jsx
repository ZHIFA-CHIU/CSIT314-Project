import React from 'react';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { GoogleMap,LoadScript, Marker} from '@react-google-maps/api'
import "./AcceptJob.css";

const AcceptJob = () => {   
    const navigate = useNavigate();

    const containerStyle = {
        marginLeft:'auto',
        marginRight:'auto',
        width: '100%',
        height: '350px'
    };

    const location = {
        //get from backend 
        lat: -33.868820,
        lng: 151.209290
    };

    const handleAccept = (e) => {
        //accept request 
        navigate('/TechnicianDashBoard');
    }

    const handleDecline = (e) => {
        navigate('/TechnicianDashBoard');
    }

    return (
        <div>
            <h3>Job Information</h3>
            <div className='ui center aligned container' style={{minWidth:"400px", maxWidth:"684px"}} >
                <p style={{textAlign:"left"}}>Location</p>
                <LoadScript
                    googleMapsApiKey="AIzaSyDc-QRg4oP9XgMlw-PfXo7IDOyXPcwp8js"
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={location}
                        zoom={15}
                    >
                        <Marker position={location}/>
                    </GoogleMap>
                </LoadScript>
                <br />
            </div>
            
            <p className='infoLabel'>Type of mechanical failure</p>
            <div className='serviceInfo'>
                <span>//insert value from back-end</span>
            </div>
            <br />

            <p className='infoLabel'>Vehicle plate number</p>
            <div className='serviceInfo'>
                <span>//insert value from back-end</span>
            </div>

            <br />

            <p className='infoLabel'>Additional information</p>
            <div className='serviceInfo'>
                <span>//insert value from back-end</span>
            </div>

            <br /><br />
            
            <div id="buttons">
                <Button variant="outlined" size='large' style={{width: "45%", marginRight: "10%"}} onClick={handleAccept}>Accept</Button>
                <Button variant="outlined" size='large' style={{width: "45%"}} onClick={handleDecline}>Decline</Button>
            </div>
        </div>
    )
}

export default AcceptJob;
