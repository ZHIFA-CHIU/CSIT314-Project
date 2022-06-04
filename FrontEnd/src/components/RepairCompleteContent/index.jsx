import React, { useEffect, useState } from 'react'
import "./Request.css"
import { Navbar } from "react-bootstrap";
import Payment from "../../pages/Payment";
import { useLocation, useNavigate } from "react-router-dom";
import { getJob } from "../../api";
import { Box, Button, Typography } from "@mui/material";

/**
 * Content for the service request page
 * @returns {JSX.Element}
 */


export default function ServiceRequestContent({ jobId }) {
    const navigate = useNavigate();

    const [hasMembership, setHasMembership] = useState("");
    const [jobPrice, setJobPrice] = useState("");

    useEffect(
        () => {
            getJob(jobId).then(
                response => {
                    setHasMembership(response.data.customer.hasMembership)
                    setJobPrice(parseFloat(response.data.jobPrice).toFixed(2))
                }
            ).catch(
                err => alert(err)
            )
        }, []);

    const navReceipt = () => {
        navigate("/Receipt", { state: { "jobId": jobId } });
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Navbar />
            <Typography component="h1" variant="h2">
                Repair Payment
            </Typography><br />

            {hasMembership === false &&
                <p>Order total is ${jobPrice}, click below to pay</p>
            }

            {hasMembership === false &&
                <div className='payment'>
                    <Payment
                        paymentInfo={
                            {
                                description: "Payment for Repair Service",
                                amount: {
                                    currency_code: "AUD",
                                    value: "20.00"
                                }
                            }
                        }
                        jobId={jobId} />
                </div>
            }

            {hasMembership === true &&
                <p>You are a member, no payment required</p>
            }
            {hasMembership === true &&
                <Button
                    variant="contained"
                    onClick={navReceipt}
                >
                    View Receipt
                </Button>
            }

        </Box>
    )
}
