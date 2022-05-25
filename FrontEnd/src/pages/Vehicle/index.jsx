import React, {useState} from 'react'
import VehicleContent from '../../components/VehicleContent/VehList'
import {useLocation, useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function ServiceRequest() {
    const navigate = useNavigate();
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='vehicle'>
            <AppBar position='static' >
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => window.history.back()}>
                        Back
                    </button>
                    <Typography align='center' sx={{ flexGrow: 1 }}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => navigate('/AddVehicle', {state: {"customerId": id}})}>
                        Add
                    </button>
                </Toolbar>
            </AppBar>
            <VehicleContent />
        </div>
    )
}