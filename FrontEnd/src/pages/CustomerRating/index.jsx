import React, {useState} from 'react'
import CustomerRatingContent from '../../components/CustomerRatingContent'
import {useLocation} from "react-router-dom";

export default function CustomerRating() {
    const history = useLocation();
    let [custId] = useState(history.state.customerId)
    let [techId] = useState(history.state.technicianId)

    return (
        <div className='rating-page'>
            <CustomerRatingContent customerId={custId} technicianId={techId}/>
        </div>
    )
}
