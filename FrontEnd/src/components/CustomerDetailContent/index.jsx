import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import "./CustomerDetailContent.css"
import { getCustomerDetailsRequest, updateCustomerDetailsRequest } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function CustomerDetailContent({ id }) {
    let navigate = useNavigate();
    // let [details, setDetails] = useState({});
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
    const [hasMembership, setHasMembership] = useState("");

    const onEmailChange = e => setEmail(e.target.value);
    const onPasswordChange = e => setPassword(e.target.value);
    // const onfirstNameChange = e => setFirstName(e.target.value);
    // const onLastNameChange = e => setLastName(e.target.value);
    // const onDobChange = e => setDob(e.target.value);
    const onPhoneNumberChange = e => setPhoneNumber(e.target.value);
    // const onAgeChange = e => setAge(e.target.value);
    const onStreetAdressChange = e => setStreetAddress(e.target.value);
    const onSuburbChange = e => setSuburb(e.target.value);
    const onPostCodeChange = e => setPostCode(e.target.value);
    const onStateChange = e => setState(e.target.value);


    /**
     * Send get request to retrieve the data from server
     */
    useEffect(
        () => getCustomerDetailsRequest(id).then(
            response => {
                // console.log(response.data);
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
                setHasMembership(response.data.hasMembership)
            }
        ).catch(
            err => alert(err)
        )
        , []);


    const handleSubmit = e => {
        e.preventDefault();
        updateCustomerDetailsRequest(
            id, firstName, lastName, email, password, dob, phoneNumber, age, streetAddress, suburb, postCode, state, hasMembership
        ).then(
            response => {
                console.log(response.data);
                let obj = JSON.parse(JSON.stringify(response.data));
                if (obj)
                    navigate("/CustomerDashboard", { state: { id } })
            }

        ).catch(
            (error) => {
                alert(error);
                // alert("Failed to update details");
                navigate("/CustomerDetail");
            }
        )
    }

    /**
     * This is a test function 
     * Only used for testing
     */
    // const test = () => {
    //     console.log(details);
    //     console.log(typeof details);
    // }

    return (
        <div className='customer-content-detail'>
            {/* <Button onClick={test}>Click Me</Button> */}
            <h1>{firstName} Details</h1>
            <form className='customer-content-detail-form' onSubmit={handleSubmit}>
                <TextField id="email" label="Email" variant="outlined" fullWidth margin='normal' value={email} onChange={onEmailChange} />
                <TextField id="firstName" label="First Name" variant="outlined" fullWidth margin='normal' value={firstName} inputProps={{ readOnly: true, }} />
                <TextField id="lastName" label="Last Name" variant="outlined" fullWidth margin='normal' value={lastName} inputProps={{ readOnly: true, }} />
                <TextField id="dob" label="Date of Birth(yyyy-mm-dd)" variant="outlined" fullWidth margin='normal' value={dob} inputProps={{ readOnly: true, }} />
                <TextField id="phoneNumber" label="Phone" variant="outlined" fullWidth margin='normal' value={phoneNumber} onChange={onPhoneNumberChange} />
                <TextField id="streetAddress" label="Street" variant="outlined" fullWidth margin='normal' value={streetAddress} onChange={onStreetAdressChange} />
                <TextField id="suburb" label="Suburb" variant="outlined" fullWidth margin='normal' value={suburb} onChange={onSuburbChange} />
                <TextField id="postCode" label="Post Code" variant="outlined" fullWidth margin='normal' value={postCode} onChange={onPostCodeChange} />
                <TextField id="state" label="State" variant="outlined" fullWidth margin='normal' value={state} onChange={onStateChange} />
                <Button
                    type='submit'
                    variant="contained"
                    size='small'
                >
                    Save
                </Button>
            </form>
        </div>
    )
}
