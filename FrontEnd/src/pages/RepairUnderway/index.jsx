import React, {useState} from 'react'
import RepairUnderwayContent from '../../components/RepairUnderwayContent'
import {useLocation} from "react-router-dom";

export default function RepairUnderway() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='repair-underway-page'>
            <RepairUnderwayContent customerId={id}/>
        </div>
    )
}