import React from 'react'
import RepairCompleteContent from '../../components/RepairCompleteContent'
import {useLocation} from "react-router-dom";

export default function RepairComplete() {
    const {state} = useLocation();

    return (
        <div className='repair-complete-page'>
            <RepairCompleteContent jobId={state.jobId}/>
        </div>
    )
}