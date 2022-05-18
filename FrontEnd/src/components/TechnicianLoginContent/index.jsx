import React from 'react'
import { Box, Button, Link, TextField, Typography,  } from '@mui/material'
import { technicianLoginRequest } from '../../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function TechnicianLoginContent() {
    const navigate = useNavigate();
    // username
    const [email, setEmail] = useState("");
    // password
    const [password, setPassword] = useState("");
    // userError
    // const [userError, setUserError] = useState([false, ""]);
    // pwd error
    // const [pwdErr, setPwdErr] = useState([false, ""]);

    /**
     * when username change update username state
     */
    const onEmailChange = e => {
        // setUserError([false, ""])
        const email = e.target.value;
        // console.log(usrname);

        setEmail(email);
    }

    /**
     * when pwd change update pwd state
     */
    const onPasswordChange = e => {
        // setPwdErr([false, ""]);
        const pwd = e.target.value;
        // console.log(pwd);
        setPassword(pwd);
    }

    /**
     * Username must be at least 4 leters long
     */
    // const validateUsername = () => {
    //     if (username.length < 4) {
    //         setUserError([true, "Username must be at least 4 letters long"]);
    //         return false;
    //     }
    //     return true;
    // }

    /**
     * password must be at least 6 digits long
     */
    // const validatePwd = () => {
    //     if (username.length < 6) {
    //         setPwdErr([true, "Username must be at least 6 digits long"]);
    //         return false;
    //     }
    //     return true;
    // }

    /**
     * Login page submission handler
     * @param {Event} e 
     */
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(username, password);
        // send log in request
        // if (validateUsername() && validatePwd())
        technicianLoginRequest(email, password).then(
            response => {
                // console.log(response.data);
                // let obj = JSON.parse(response.data);
                // console.log(obj);
                let tmp = JSON.stringify(response.data);
                let obj = JSON.parse(tmp);
                // console.log(obj["technicianId"]);
                if (obj.login)
                    navigate("/TechnicianDashboard", { state: { id: obj["technicianId"] } })
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
                // error={userError[0]}
                // helperText={userError[1]}
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
                // error={userError[0]}
                // helperText={userError[1]}
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
