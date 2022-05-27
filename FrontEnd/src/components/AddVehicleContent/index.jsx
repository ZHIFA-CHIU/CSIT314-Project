import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import {useForm} from 'react-hook-form'

import  "./vehicle.css"
import {addVehicle} from '../../api'
import {useNavigate} from "react-router-dom";
export default function AddVehicle({customerId}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // const onSubmit = data => console.log(data);
    const goBackPage = () => {
        window.history.back()
    }

    const navigate = useNavigate();

    const onSubmit = (data) => {
        addVehicle(customerId, data).then(
            response => {
                alert("Vehicle has been successfully added");
                navigate("/VehList", {state: {id: customerId}});
            }
        ).catch(
            error => alert(error)
        )
    };

    //console.log(watch("example"));
    // console.log(errors);
    return (
        <div>
            <AppBar position='static' >
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Back
                    </button>
                    <Typography align='center' sx={{ flexGrow: 1 }}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Done
                    </button>
                </Toolbar>
            </AppBar>
            {/*<div className='header' style={{background:"white"}}>*/}
            {/*    <button className='medium ui primary button' onClick={() => goBackPage()}>*/}
            {/*        Back*/}
            {/*    </button>*/}
            {/*</div>*/}


            <h1>Please Add Vehicle</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Manufacture"
                       {...register("manufacturer", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.manufacturer?.type === "required" && <p>This field is required</p>}
                {errors?.Manufacturer?.type === "maxLength" && (
                    <p>Manufacture cannot exceed 30 characters</p>
                )}
                <input type="text" placeholder="Model"
                       {...register("model", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.model?.type === "required" && <p>This field is required</p>}
                {errors?.model?.type === "maxLength" && (
                    <p>Model cannot exceed 30 characters</p>
                )}
                <select {...register("manufacturedYear")}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                </select>
                <input type="text" placeholder="Colour"
                       {...register("colour", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.colour?.type === "required" && <p>This field is required</p>}
                {errors?.colour?.type === "maxLength" && (
                    <p>Colour cannot exceed 30 characters</p>
                )}
                <input type="text" placeholder="Rego"
                       {...register("registrationPlate", {
                           required: true,
                           maxLength: 6,
                           minLength: 6
                       })} />
                {errors?.registrationPlate?.type === "required" && <p>This field is required</p>}
                {errors?.registrationPlate?.type === "maxLength" && (
                    <p>Rego must be 6 characters</p>
                )}
                {errors?.registrationPlate?.type === "minLength" && (
                    <p>Rego must be 6 characters</p>
                )}
                <select {...register("registeredState", { required: true })}>
                    <option value="New South Wales">New South Wales</option>
                    <option value="Queensland">Queensland</option>
                    <option value="Northern Territory">Northern Territory</option>
                    <option value="Western Australia">Western Australia</option>
                    <option value="South Australia">South Australia</option>
                    <option value="Victoria">Victoria</option>
                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                    <option value="Tasmania">Tasmania</option>
                </select>
                <input type="number" placeholder="Weight(KG)"
                       {...register("weight", {
                           required: true,
                           maxLength: 10
                       })} />
                {errors?.weight?.type === "required" && <p>This field is required</p>}
                {errors?.weight?.type === "maxLength" && (
                    <p>Weight cannot exceed 10 characters</p>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}