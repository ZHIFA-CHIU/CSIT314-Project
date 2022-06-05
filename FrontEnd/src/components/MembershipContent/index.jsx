import React, { useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { PayPalButton } from "react-paypal-button-v2";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCustomerDetailsRequest, updateMembership } from '../../api'

export default function LoginContent({ id }) {
    const navigate = useNavigate();

    const [hasMembership, setHasMembership] = useState("");

    useEffect(
        () => {
            getCustomerDetailsRequest(id).then(
                response => {
                    setHasMembership(response.data.hasMembership)
                }
            ).catch(
                err => alert(err)
            )
        }, []);

    let membershipValue;
    if (hasMembership) {
        membershipValue = "You are a member";
    } else {
        membershipValue = "You are not a member";
    }

    const navCustDash = (e) => {
        navigate("/CustomerDashboard", { state: { id } })
    }

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h2">
                Sign-Up for Membership
            </Typography><br />

            <Typography component="h2" variant="h4">
                Your Membership status:
            </Typography>

            <Typography component="h2" variant="h4">
                {membershipValue}
            </Typography>

            <br />

            {hasMembership === false &&
                <p>
                    Membership costs $100.00 per year, click below to pay for membership
                </p>
            }
            {hasMembership === false &&
                <div>
                    <script src="https://www.paypal.com/sdk/js?client-id=AdxfkzlJTUYRSOgVo9QAMdyB2hwznh4rYUHy7SP5MzNl9FAot_qeT4wV5Bgd7xDvr-kHprqfqfgOz5OY&currency=AUD&intent=capture&enable-funding=venmo"></script>
                    <PayPalButton
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        currency_code: "AUD",
                                        value: "100.00"
                                    }
                                }],
                            });
                        }}
                        onApprove={(data, actions) => {
                            // Capture the funds from the transaction
                            return actions.order.capture().then(function (details) {
                                updateMembership(
                                    id, true
                                ).then(() => {
                                    alert("Payment has been successful");
                                    navigate("/CustomerDashboard", { state: { id } });
                                }
                                )
                            });
                        }}
                    />
                </div>
            }

            <Button
                variant="contained"
                onClick={navCustDash}
            >
                Return Home
            </Button>
        </Box>
    )
}
