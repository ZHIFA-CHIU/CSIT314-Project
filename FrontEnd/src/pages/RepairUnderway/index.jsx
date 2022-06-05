import React from 'react'
import RepairUnderwayContent from '../../components/RepairUnderwayContent'
import {useLocation} from "react-router-dom";

export default function RepairUnderway() {
    const {state} = useLocation();
    return (
        <div className='repair-underway-page'>
            <RepairUnderwayContent jobId={state.jobId}/>
        </div>
    )
}