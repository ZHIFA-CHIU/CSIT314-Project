import React from 'react'
import { Box, Button, Link, TextField, Typography } from '@mui/material'
import { loginRequest } from '../../api';
import { useState } from 'react';




export default function LoginContent() {
    // username
    const [username, setUsername] = useState("");
    // password
    const [password, setPassword] = useState("");
    // userError
    const [userError, setUserError] = useState([false, ""]);
    // pwd error
    const [pwdErr, setPwdErr] = useState([false, ""]);


    /**
     * when username change update username state
     */
    const onUsernameChange = e => {
        setUserError([false, ""])
        const usrname = e.target.value;
        // console.log(usrname);

        setUsername(usrname);
    }

    /**
     * when pwd change update pwd state
     */
    const onPasswordChange = e => {
        setPwdErr([false, ""]);
        const pwd = e.target.value;
        // console.log(pwd);
        setPassword(pwd);
    }

    /**
     * Username must be at least 4 leters long
     */
    const validateUsername = () => {
        if (username.length < 4) {
            setUserError([true, "Username must be at least 4 letters long"]);
            return false;
        }
        return true;
    }

    /**
     * password must be at least 6 digits long
     */
    const validatePwd = () => {
        if (username.length < 6) {
            setPwdErr([true, "Username must be at least 6 digits long"]);
            return false;
        }
        return true;
    }

    /**
     * Login page submission handler
     * @param {Event} e 
     */
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(username, password);
        // send log in request
        if (validateUsername() && validatePwd())
            loginRequest(username, password).then(response => console.log(response.data)).catch(error => console.log(error))
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
                Sign in
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="username"
                    name="username"
                    autoComplete="Username"
                    autoFocus
                    defaultValue={""}
                    onChange={onUsernameChange}
                    error={userError[0]}
                    helperText={userError[1]}
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
                    error={userError[0]}
                    helperText={userError[1]}
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
                    <Link variant={"body2"} underline={"hover"} href={"/signup"}>
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Box>

            </form>
        </Box>
    )
}
