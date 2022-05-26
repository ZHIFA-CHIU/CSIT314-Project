import React, {useEffect} from 'react'
import { Box, Typography } from '@mui/material'
import { PayPalButton } from "react-paypal-button-v2";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCustomerDetailsRequest } from '../../api'

export default function LoginContent({ id }) {
    const navigate = useNavigate();
    const [hasMembership, setHasMembership] = useState("");

    useEffect(
        () => getCustomerDetailsRequest(id).then(
            response => {
                setHasMembership(response.data.hasMembership)
            }
        ).catch(
            err => alert(err)
        )
        , []);

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Typography component="h1" variant="h5">
                Sign-Up for Membership
            </Typography><br/>

            <Typography component="h2" variant="h4">
                Your Membership status:
            </Typography>

            {hasMembership === true &&
                <Typography component="h2" variant="h4">
                    You Are Member
                </Typography>
            }




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
                        // application_context: {
                        //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                        // }
                    });
                }}
                onApprove={(data, actions) => {
                    // Capture the funds from the transaction
                    return actions.order.capture().then(function(details) {
                        // Show a success message to your buyer
                        alert("Transaction completed by " + details.payer.name.given_name);

                        // OPTIONAL: Call your server to save the transaction
                        // return fetch("/paypal-transaction-complete", {
                        //     method: "post",
                        //     body: JSON.stringify({
                        //         orderID: data.orderID
                        //     })
                        // });
                    });
                }}
            />
        </Box>
    )
}
