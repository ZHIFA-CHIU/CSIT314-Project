import React, { useState, useEffect } from 'react'
import { TextField, Button } from '@mui/material'
import "./TechnicianDetailContent.css"
import { getTechnicianDetailsRequest, updateTechnicianDetailsRequest } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function TechnicianDetailContent({ id }) {
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
    const [availableStatus, setAvailableStatus] = useState("");
    const [avgRating, setAvgRating] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [age, setAge] = useState("");


    const onFirstNameChange = e => setFirstName(e.target.value);
    const onLastNameChange = e => setLastName(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onDobChange = e => setDob(e.target.value);
    const onPhoneNumberChange = e => setPhoneNumber(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    const onStreetAddressChange = e => setStreetAddress(e.target.value);
    const onSuburbChange = e => setSuburb(e.target.value);
    const onPostCodeChange = e => setPostCode(e.target.value);
    const onStateChange = e => setState(e.target.value);
    const onHeavyVehicleQualificationChange = e => setHeavyVehicleQualification(e.target.value);
    const onLightVehicleQualificationChange = e => setLightVehicleQualification(e.target.value);


    useEffect(
        () => getTechnicianDetailsRequest(id).then(
            response => {
                console.log(response.data);
                // setDetails(response.data);
                setEmail(response.data.email);
                setPhoneNumber(response.data.phoneNumber);
                setPostCode(response.data.postCode);
                setState(response.data.state);
                setStreetAddress(response.data.streetAddress);
                setSuburb(response.data.suburb);
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setDob(response.data.dob);
                setPassword(response.data.password);
                setHeavyVehicleQualification(response.data.heavyVehicleQualification);
                setLightVehicleQualification(response.data.lightVehicleQualification);
                setAvailableStatus(response.data.availableStatus);
                setAvgRating(response.data.avgRating);
                setBankAccount(response.data.bankAccount);
                setAge(response.data.age);
            }
        ).catch(
            err => alert(err)
        )
        , []);

    const handleSubmit = e => {
        e.preventDefault();
        updateTechnicianDetailsRequest(
            id, age, availableStatus, avgRating, bankAccount, dob, email,
            firstName, heavyVehicleQualification, lastName, lightVehicleQualification, password, phoneNumber, postCode, state, streetAddress, suburb
        ).then(
            response => {
                console.log(response.data);
                let obj = JSON.parse(JSON.stringify(response.data));
                if (obj)
                    navigate("/TechnicianDashboard", { state: { id } })
            }
        ).catch(
            err => alert(err)
        );
    }
    return (
        <div className='technician-detail'>
            <form className='technician-detail-form' onSubmit={handleSubmit}>
                <TextField id="firstName" label="First Name" variant="outlined" fullWidth margin='normal' value={firstName} inputProps={{ readOnly: true, }} />
                <TextField id="lastName" label="Last Name" variant="outlined" fullWidth margin='normal' value={lastName} inputProps={{ readOnly: true, }} />
                <TextField id="email" label="Email" variant="outlined" fullWidth margin='normal' value={email} onChange={onEmailChange} />
                {/* <TextField id="password" label="Password" type={"password"} variant="outlined" fullWidth margin='normal' /> */}
                <TextField id="phoneNumber" label="Phone" variant="outlined" fullWidth margin='normal' value={phoneNumber} onChange={onPhoneNumberChange} />
                <TextField id="dob" label="Date of Birth(yyyy-mm-dd)" variant="outlined" fullWidth margin='normal' value={dob} inputProps={{ readOnly: true, }} />
                <TextField id="streetAddress" label="Street" variant="outlined" fullWidth margin='normal' value={streetAddress} onChange={onStreetAddressChange} />
                <TextField id="suburb" label="Suburb" variant="outlined" fullWidth margin='normal' value={suburb} onChange={onSuburbChange} />
                <TextField id="postCode" label="Post Code" variant="outlined" fullWidth margin='normal' value={postCode} onChange={onPostCodeChange} />
                <TextField id="state" label="State" variant="outlined" fullWidth margin='normal' value={state} onChange={onStateChange} />
                <Button
                    type='submit'
                    variant="contained"
                >
                    Save
                </Button>
            </form>
        </div>
    )
}
