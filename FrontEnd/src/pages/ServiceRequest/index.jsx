import React, {useState} from 'react'
import ServiceRequestContent from '../../components/ServiceRequestContent'
import {useLocation} from "react-router-dom";
import Banner from "../../components/Banner";

export default function ServiceRequest() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='request-page'>
            <Banner dashboard={true} id={id} to={"CustomerDashboard"} />
            <ServiceRequestContent customerId={id}/>
        </div>
    )
}