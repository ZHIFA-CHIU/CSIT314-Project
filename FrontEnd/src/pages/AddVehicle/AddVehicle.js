import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import {useForm} from 'react-hook-form'

import  "./vehicle.css"
import Banner from "../../components/Banner";
export default function AddVehicle() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

    // const onSubmit = data => console.log(data);
    const goBackPage = () => {
        window.history.back()
    }

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        console.log(data);
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
                       {...register("Manufacture", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.Manufacture?.type === "required" && <p>This field is required</p>}
                {errors?.Manufacture?.type === "maxLength" && (
                    <p>Manufacture cannot exceed 30 characters</p>
                )}
                <input type="text" placeholder="Model"
                       {...register("Model", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.Model?.type === "required" && <p>This field is required</p>}
                {errors?.Model?.type === "maxLength" && (
                    <p>Model cannot exceed 30 characters</p>
                )}
                <select {...register("Year")}>
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
                       {...register("Colour", {
                           required: true,
                           maxLength: 30,
                       })} />
                {errors?.Colour?.type === "required" && <p>This field is required</p>}
                {errors?.Colour?.type === "maxLength" && (
                    <p>Colour cannot exceed 30 characters</p>
                )}
                <input type="text" placeholder="Rego"
                       {...register("Rego", {
                           required: true,
                           maxLength: 7
                       })} />
                {errors?.Rego?.type === "required" && <p>This field is required</p>}
                {errors?.Rego?.type === "maxLength" && (
                    <p>Rego cannot exceed 7 characters</p>
                )}
                <select {...register("Registered State", { required: true })}>
                    <option value="New South Wales">New South Wales</option>
                    <option value="Queensland">Queensland</option>
                    <option value="Northern Territory">Northern Territory</option>
                    <option value="Western Australia">Western Australia</option>
                    <option value="South Australia">South Australia</option>
                    <option value="Victoria">Victoria</option>
                    <option value="Australian Capital Territory">Australian Capital Territory</option>
                    <option value="Tasmania">Tasmania</option>
                </select>
                <input type="text" placeholder="Weight"
                       {...register("Weight", {
                           required: true,
                           maxLength: 10
                       })} />
                {errors?.Weight?.type === "required" && <p>This field is required</p>}
                {errors?.Weight?.type === "maxLength" && (
                    <p>Weight cannot exceed 10 characters</p>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}