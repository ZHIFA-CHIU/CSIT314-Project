import React, {useState} from 'react'
import CustomerRatingContent from '../../components/CustomerRatingContent'
import {useLocation} from "react-router-dom";

export default function CustomerRating() {
    let history = useLocation()
    let [id] = useState(2)
    return (
        <div className='rating-page'>
            <CustomerRatingContent technicianId={id}/>
        </div>
    )
}
