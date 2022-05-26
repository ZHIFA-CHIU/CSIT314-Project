import React, {useEffect, useState} from "react"
import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import Rating from '@mui/material/Rating';
import {useNavigate} from "react-router-dom";
import "./Rating.css"
import {addReview} from "../../api";

/**
 * Content for the review page
 * @param technicianId technicianId to submit with review
 * @returns {JSX.Element}
 */
export default function CustomerRatingContent({technicianId}) {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm()
    const goBackPage = () => {
        window.history.back()
    }

    const navigate = useNavigate();


    const onSubmit = (data) => {
        //console.log(data);
        addReview(technicianId, data).then(
            response => {
                alert("Review successfully submitted");
                navigate("/CustomerDashboard");
            }
        ).catch(
            error => alert(error)
        )
    };

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Back
                    </button>
                    <Typography align='center' sx={{flexGrow: 1}} onClick={() => navigate("/home")}>
                        Roadside Assistant Service
                    </Typography>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Next
                    </button>
                </Toolbar>
            </AppBar>

            <h1>Please Rate and Review Service</h1>
            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography component="legend">Rating</Typography>
                    <br/>
                    <Controller
                        name="rating"
                        control={control}
                        rules={{ required: true }}
                        render={({field}) =>
                            <Rating name="size-large" size="large" rating={field.value} onChange={field.onChange}  />}
                    />
                    {errors?.rating?.type === "required" && <p>This field is required</p>}
                    <br/>
                    <br/>
                    <Typography component="legend">Comment</Typography>
                    <br/>
                    <textarea rows="5" placeholder="Please review"
                              {...register("reviewInformation", {
                                  required: true,
                                  maxLength: 200
                              })} />
                    {errors?.reviewInformation?.type === "required" && <p>This field is required</p>}
                    {errors?.reviewInformation?.type === "maxLength" && (
                        <p>Comment cannot exceed 200 characters</p>
                    )}
                    <input type="submit" />
                </form>
            </Box>
        </div>

    );
}