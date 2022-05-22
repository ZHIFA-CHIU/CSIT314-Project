import React from "react"
import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import {useForm, Controller} from 'react-hook-form'
import Rating from '@mui/material/Rating';


import {useNavigate} from "react-router-dom";

import "./Rating.css"

export default function CustomerRatingContent() {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const goBackPage = () => {
        window.history.back()
    }

    const navigate = useNavigate();

    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <button className='medium ui primary button' onClick={() => goBackPage()}>
                        Back
                    </button>
                    <Typography align='center' sx={{flexGrow: 1}} onClick={() => goBackPage()}>
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
                    <Controller
                        name="Rating"
                        control={control}
                        defaultValue={3}
                        rules={{ required: true }}
                        render={(props) =>
                            <Rating name="size-large" size="large" onChange={props.onChange}  />}
                    />
                    {/*<input type="range" placeholder="Rating" {...register("Rating", {})} />*/}
                    <Typography component="legend">Comment</Typography>
                    <textarea {...register("Review", {required: true})} />
                    <input type="submit" />
                </form>
            </Box>
            {/*<div className='ui center aligned container' style={{minWidth: "400px", maxWidth: "684px"}}>*/}
            {/*    <p>Rating</p>*/}

        {/*    </div>*/}
        </div>

    );
}