import React, {useState} from 'react'
import RepairCompleteContent from '../../components/RepairCompleteContent'
import {useLocation} from "react-router-dom";

export default function RepairComplete() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='repair-complete-page'>
            <RepairCompleteContent customerId={id}/>
        </div>
    )
}