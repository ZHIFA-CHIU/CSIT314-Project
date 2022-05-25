import React, {useState} from 'react'
import FoundTechnicianContent from '../../components/FoundTechnicianContent'
import {useLocation} from "react-router-dom";

export default function FoundTechnician() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='found-technician-page'>
            <FoundTechnicianContent customerId={id}/>
        </div>
    )
}