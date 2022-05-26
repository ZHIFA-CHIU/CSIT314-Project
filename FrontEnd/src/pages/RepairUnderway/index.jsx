import React, {useState} from 'react'
import RepairUnderwayContent from '../../components/RepairUnderwayContent'
import {useLocation} from "react-router-dom";

export default function RepairUnderway() {
    let history = useLocation()
    let [id] = useState(history.state.jobId)
    return (
        <div className='repair-underway-page'>
            <RepairUnderwayContent jobId={id}/>
        </div>
    )
}