import React, { useState } from 'react';
import { TextField, Button, Link } from '@material-ui/core';
import "./TechnicianSignup.css";
import { technicianSignupRequest } from '../../api';
import { useNavigate } from 'react-router-dom';


const CreateTechnicianCustomer = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [suburb, setSuburb] = useState("");
    const [postCode, setPostCode] = useState("");
    const [state, setState] = useState("");
    const [heavyVehicleQualification, setHeavyVehicleQualification] = useState("");
    const [lightVehicleQualification, setLightVehicleQualification] = useState("");

    const onfirstNameChange = e => setFirstName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onDobChange = e => setDob(e.target.value);
    const onPhoneNumberChange = e => setPhoneNumber(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onStreetAdressChange = e => setStreetAddress(e.target.value);
    const onSuburbChange = e => setSuburb(e.target.value);
    const onPostCodeChange = e => setPostCode(e.target.value);
    const onStateChange = e => setState(e.target.value);
    const onHeavyVehicleQualificationChange = e => setHeavyVehicleQualification(e.target.value);
    const onLightVehicleQualificationChange = e => setLightVehicleQualification(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
//        technicianSignupRequest(
//            firstName, lastName, email, dob, phoneNumber, password, streetAddress, suburb, postCode, state, false, false
//        ).then(
        technicianSignupRequest(
            "firstName", "lastName", "email@email.com", "2000-01-01", "0412345678", "password", "streetAddress", "suburb", "postCode", "state", false, false
        ).then(
            response => {
                // console.log(response.data);
                let obj = JSON.parse(JSON.stringify(response.data));
                if (obj)
                    navigate("/login")
            }

        ).catch(
            error => {
                alert("Account already exists test");
                //navigate("/technicianSignup");
            }
        );
    }

//<TextField onChange={onHeavyVehicleQualificationChange} id="heavyVehicleQualification" label="heavyVehicleQualification" variant="outlined" fullWidth margin='normal' />
//<TextField onChange={onLightVehicleQualificationChange} id="lightVehicleQualification" label="lightVehicleQualification" variant="outlined" fullWidth margin='normal' />
                

    return (
        <div className='technicianSignup'>
            <h1>TechnicianSignup</h1>
            <form className='technicianSignup-form' onSubmit={handleSubmit}>
                <TextField onChange={onfirstNameChange} id="firstName" label="First Name" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onLastNameChange} id="lastName" label="Last Name" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onEmailChange} id="email" label="Email" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPasswordChange} id="password" label="Password" type={"password"} variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPhoneNumberChange} id="phoneNumber" label="Phone" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onDobChange} id="dob" label="Date of Birth(yyyy-mm-dd)" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onStreetAdressChange} id="streetAddress" label="Street" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onSuburbChange} id="suburb" label="Suburb" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onPostCodeChange} id="postCode" label="Post Code" variant="outlined" fullWidth margin='normal' />
                <TextField onChange={onStateChange} id="state" label="State" variant="outlined" fullWidth margin='normal' />
                <Button
                    type='submit'
                    fullWidth
                    variant="contained"
                >
                    TechnicianSignup
                </Button>
                <Link variant={"body2"} underline={"hover"} href={"/login"}>
                    {"Already a member? Login"}
                </Link>
            </form>
        </div>
    )
}

export default CreateTechnicianCustomer;
