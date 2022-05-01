import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import "./HomeContent.css"

export default function HomeContent() {
    const navigate = useNavigate();
    return (
        <div className='home-content'>
            <img src={require("./bg.jpeg")} width={"100%"} />
            <div className='buttons'>
                <div className='login'>
                    <Button onClick={() => navigate("/login")} variant={"contained"}>Log In</Button>
                </div>
                <div className='signup'>
                    <Button onClick={() => navigate("/signup")} variant={"outlined"}>Sign Up</Button>
                </div>
            </div>
        </div>
    )
}