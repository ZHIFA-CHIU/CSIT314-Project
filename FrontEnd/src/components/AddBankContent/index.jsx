import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {addBank} from '../../api'
import "./bank.css"
import {useNavigate} from "react-router-dom";

/**
 * Content for the add bank account page
 * @param technicianId technicianId to submit with add vehicle
 * @returns {JSX.Element}

 */
export default function AddBank({technicianId}) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const [id] = useState(window.history.state.id);

    const onSubmit = (data) => {
        addBank(technicianId, data).then(
            response => {
                alert("Bank account has been successfully added");
                navigate("/TechnicianDashboard", { state: { id } })
            }
        ).catch(
            error => alert(error)
        )
    };

    return (
        <div>
            <h1>Please Add Bank Account</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Account Name"
                       {...register("accountName", {
                           required: true,
                       })} />
                {errors?.accountName?.type === "required" && <p>This field is required</p>}
                <input type="text" placeholder="Account Number"
                       {...register("accountNumber", {
                           required: true,
                           maxLength: 8,
                           minLength: 8
                       })} />
                {errors?.accountNumber?.type === "required" && <p>This field is required</p>}
                {errors?.accountNumber?.type === "maxLength" && (
                    <p>Account number must be 8 characters</p>
                )}
                {errors?.accountNumber?.type === "minLength" && (
                    <p>Account number must be 8 characters</p>
                )}
                <input type="text" placeholder="BSB"
                       {...register("bsb", {
                           required: true,
                           maxLength: 6,
                           minLength: 6
                       })} />
                {errors?.bsb?.type === "required" && <p>This field is required</p>}
                {errors?.bsb?.type === "maxLength" && (
                    <p>BSB must be 6 characters</p>
                )}
                {errors?.bsb?.type === "minLength" && (
                    <p>BSB must be 6 characters</p>
                )}
                <input type="submit" />
            </form>
        </div>
    )
}