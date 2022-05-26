import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material'
import "./VehicleDetail.css"
import { getVehicle, updateVehicle } from '../../api';
import { useNavigate } from 'react-router-dom';

export default function VehicleDetailContent({ id }) {
    let navigate = useNavigate();
    const [manufacturer, setManufacturer] = useState("");
    const [model, setModel] = useState("");
    const [manufactured_year, setManufactured_year] = useState("");
    const [colour, setColour] = useState("");
    const [registration_plate, setRegistration_plate] = useState("");
    const [registered_state, setRegistered_state] = useState("");
    const [weight, setWeight] = useState("");

    const onManufacturerChange = e => setManufacturer(e.target.value);
    const onModelChange = e => setModel(e.target.value);
    const onManufactured_yearChange = e => setManufactured_year(e.target.value);
    const onColourChange = e => setColour(e.target.value);
    const onRegistration_plateChange = e => setRegistration_plate(e.target.value);
    const onRegistered_stateChange = e => setRegistered_state(e.target.value);
    const onWeightChange = e => setWeight(e.target.value);

    /**
     * Send get request to retrieve the data from server
     */
    useEffect(
        () => getVehicle(id).then(
            response => {
                // console.log(response.data);
                // setDetails(response.data);
                setManufacturer(response.data.manufacturer);
                setModel(response.data.model);
                setManufactured_year(response.data.manufactured_year);
                setColour(response.data.colour);
                setRegistration_plate(response.data.registration_plate);
                setRegistered_state(response.data.registered_state);
                setWeight(response.data.weight);
            }
        ).catch(
            err => alert(err)
        )
        , []);


    const handleSubmit = e => {
        e.preventDefault();
        updateVehicle(
            colour, manufactured_year, manufacturer, model, registered_state, registration_plate, weight
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
            <h1>{registration_plate} Details</h1>
            <form className='vehicleDetail-form' onSubmit={handleSubmit}>
                <TextField id="manufacturer" label="Manufacturer" variant="outlined" fullWidth margin='normal' value={manufacturer} onChange={onManufacturerChange} />
                <TextField id="model" label="Model" variant="outlined" fullWidth margin='normal' value={model} onChange={onModelChange} />
                <TextField id="manufactured_year" label="Manufactured Year" variant="outlined" fullWidth margin='normal' value={manufactured_year} onChange={onManufactured_yearChange} />
                <TextField id="colour" label="Colour" variant="outlined" fullWidth margin='normal' value={colour} onChange={onColourChange} />
                <TextField id="registration_plate" label="Registration Plate" variant="outlined" fullWidth margin='normal' value={registration_plate} inputProps={{ readOnly: true, }} />
                <TextField id="registered_state" label="Registered State" variant="outlined" fullWidth margin='normal' value={registered_state} onChange={onRegistered_stateChange} />
                <TextField id="weight" label="Weight" variant="outlined" fullWidth margin='normal' value={weight} onChange={onWeightChange} />

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
