import React, {useState} from 'react'
import ServiceRequestContent from '../../components/ServiceRequestContent'
import {useLocation} from "react-router-dom";

export default function ServiceRequest() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='request-page'>
            <ServiceRequestContent customerId={id}/>
        </div>
    )
}