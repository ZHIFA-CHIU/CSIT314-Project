import React, { useState } from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import "./Signup.css";
import { signupRequest } from '../../api';
import { useNavigate } from 'react-router-dom';


const CreateAccountCustomer = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [age, setAge] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [postCode, setPostCode] = useState("");
    const [state, setState] = useState("");

    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onfirstNameChange = e => setFirstName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onDobChange = e => setDob(e.target.value);
    const onPhoneNumberChange = e => setPhoneNumber(e.target.value);
    const onAgeChange = e => setAge(e.target.value);
    const onStreetAdressChange = e => setStreetAddress(e.target.value);
    const onSuburbChange = e => setSuburb(e.target.value);
    const onPostCodeChange = e => setPostCode(e.target.value);
    const onStateChange = e => setState(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        signupRequest(
            firstName, lastName, email, password, dob, phoneNumber, age, streetAddress, suburb, postCode, state
        ).then(
            response => {
                // console.log(response.data);
                let obj = JSON.parse(JSON.stringify(response.data));
                if (obj)
                    navigate("/login")
            }

        ).catch(
            error => {
                alert("Account already exists");
                navigate("/signup");
            }
        );
    }

    return (
        <div className='signup'>
            <h1>Signup</h1>
            <form className='signup-form' onSubmit={handleSubmit}>
                <TextField onChange={onEmailChange} id="email" label="Email" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPasswordChange} id="password" label="Password" type={"password"} variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onfirstNameChange} id="firstName" label="First Name" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onLastNameChange} id="lastName" label="Last Name" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onDobChange} id="dob" label="Date of Birth(yyyy-mm-dd)" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPhoneNumberChange} id="phoneNumber" label="Phone" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onAgeChange} id="age" label="Age" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onStreetAdressChange} id="streetAddress" label="Street" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onSuburbChange} id="suburb" label="Suburb" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPostCodeChange} id="postCode" label="Post Code" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onStateChange} id="state" label="State" variant="outlined" fullWidth margin='normal' />
                <Button
                    type='submit'
                    fullWidth
                    variant="contained"
                >
                    Signup
                </Button>
                <Link variant={"body2"} underline={"hover"} href={"/login"}>
                    {"Already a member? Login"}
                </Link>
            </form>
        </div>
    )
}

export default CreateAccountCustomer;
