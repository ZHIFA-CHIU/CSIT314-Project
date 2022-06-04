import React from 'react'
import { Box, Button, Link, TextField, Typography, } from '@mui/material'
import { technicianLoginRequest } from '../../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function TechnicianLoginContent() {
    const navigate = useNavigate();
    // username
    const [email, setEmail] = useState("");
    // password
    const [password, setPassword] = useState("");

    /**
     * when username change update username state
     */
    const onEmailChange = e => {
        const email = e.target.value;
        setEmail(email);
    }

    /**
     * when pwd change update pwd state
     */
    const onPasswordChange = e => {
        const pwd = e.target.value;
        setPassword(pwd);
    }

    /**
     * Login page submission handler
     * @param {Event} e 
     */
    const handleSubmit = e => {
        e.preventDefault();
        technicianLoginRequest(email, password).then(
            response => {
                console.log(response.data);
                let tmp = JSON.stringify(response.data);
                let obj = JSON.parse(tmp);
                if (obj.login)
                    navigate("/TechnicianDashboard", { state: { id: obj["customer-id"] } })
                else
                    alert("Login failed")
            }
        ).catch(
            error => {
                alert(error);
                navigate("/login");
            }

        )
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

            <Typography component="h1" variant="h5">
                Technician Sign in
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="Email"
                    autoFocus
                    defaultValue={""}
                    onChange={onEmailChange}
                />

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    defaultValue={""}
                    onChange={onPasswordChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Log In
                </Button>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <Link variant={"body2"} underline={"hover"} href={"/TechnicianSignup"}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Box>

            </form>
        </Box>


    )
}
