import React from 'react'
import CustomerRatingContent from '../../components/CustomerRatingContent'
import {useLocation} from "react-router-dom";

export default function CustomerRating() {
    const {state} = useLocation();
    return (
        <div className='rating-page'>
            <CustomerRatingContent customerId={state.customerId} technicianId={state.technicianId}/>
        </div>
    )
}
