import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import "./VehicleDetail.css"
import { getVehicle, updateVehicle } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function VehicleDetailContent({ id, vehicleID }) {
    let navigate = useNavigate();
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [manufacturedYear, setManufacturedYear] = useState("");
    const [colour, setColour] = useState("");
    const [registrationPlate, setRegistrationPlate] = useState("");
    const [registeredState, setRegisteredState] = useState("");
    const [weight, setWeight] = useState("");

    const onManufacturerChange = e => setManufacturer(e.target.value);
    const onModelChange = e => setModel(e.target.value);
    const onManufacturedYearChange = e => setManufacturedYear(e.target.value);
    const onColourChange = e => setColour(e.target.value);
    const onRegistrationPlateChange = e => setRegistrationPlate(e.target.value);
    const onRegisteredStateChange = e => setRegisteredState(e.target.value);
    const onWeightChange = e => setWeight(e.target.value);

    /**
     * Send get request to retrieve the data from server
     */
    useEffect(
        () => getVehicle(vehicleID).then(
            response => {
                console.log(response.data);
                // setDetails(response.data);
                setManufacturer(response.data.manufacturer);
                setModel(response.data.model);
                setManufacturedYear(response.data.manufacturedYear);
                setColour(response.data.colour);
                setRegistrationPlate(response.data.registrationPlate);
                setRegisteredState(response.data.registeredState);
                setWeight(response.data.weight);
            }
        ).catch(
            err => alert("Please add a vehicle")
        )
        , []);


    const handleSubmit = e => {
        e.preventDefault();
        updateVehicle(
            colour, manufacturedYear, manufacturer, model, registeredState, registrationPlate, weight
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
        <div className='vehicleDetail'>
            {/* <Button onClick={test}>Click Me</Button> */}
            <h1>Vehicle {registrationPlate} Details</h1>
            <form className='vehicleDetail-form' onSubmit={handleSubmit}>
                <TextField id="manufacturer" label="Manufacturer" variant="outlined" fullWidth margin='normal' value={manufacturer} onChange={onManufacturerChange} />
                <TextField id="model" label="Model" variant="outlined" fullWidth margin='normal' value={model} onChange={onModelChange} />
                <TextField id="manufactured_year" label="Manufactured Year" variant="outlined" fullWidth margin='normal' value={manufacturedYear} onChange={onManufacturedYearChange} />
                <TextField id="colour" label="Colour" variant="outlined" fullWidth margin='normal' value={colour} onChange={onColourChange} />
                <TextField id="registration_plate" label="Registration Plate" variant="outlined" fullWidth margin='normal' value={registrationPlate} inputProps={{ readOnly: true, }} />
                <TextField id="registered_state" label="Registered State" variant="outlined" fullWidth margin='normal' value={registeredState} onChange={onRegisteredStateChange} />
                <TextField id="weight" label="Weight" variant="outlined" fullWidth margin='normal' value={weight} onChange={onWeightChange} />

                {/*<Button*/}
                {/*    type='submit'*/}
                {/*    variant="contained"*/}
                {/*    size='small'*/}
                {/*>*/}
                {/*    Save*/}
                {/*</Button>*/}
            </form>
        </div>
    )
}
