import React from 'react'
import VehicleContent from '../../components/VehicleContent/VehList'
import {useNavigate} from "react-router-dom";
import {AppBar, Toolbar, Typography} from "@mui/material";

export default function ServiceRequest() {
    const navigate = useNavigate();
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
                    <button className='medium ui primary button' onClick={() => navigate("/AddVehicle")}>
                        Add
                    </button>
                </Toolbar>
            </AppBar>
            <VehicleContent />
        </div>
    )
}