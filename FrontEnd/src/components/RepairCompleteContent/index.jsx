import React from 'react'
import "./Request.css"
import {Navbar} from "react-bootstrap";
import Payment from "../../pages/Payment";
import {useLocation} from "react-router-dom";

/**
 * Content for the service request page
 * @returns {JSX.Element}
 */


export default function ServiceRequestContent({jobId}) {

    //TODO WE NEED TO RETURN Payment INFO

    const payment = {
        description: "Flat Types Serivce",
        amount: {
            currency_code: "AUD",
            value: 200
        }
    };

    return (
        <div>
            <Navbar/>
            <h1>Repair Payment</h1>
            <div className='payment'>
                <Payment paymentInfo={payment} jobId={jobId}/>
            </div>
        </div>
    )
}
