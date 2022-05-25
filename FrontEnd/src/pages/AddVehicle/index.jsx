import React, {useState} from 'react'
import AddVehicleContent from '../../components/AddVehicleContent'
import {useLocation} from "react-router-dom";

export default function AddVehicle() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='addVehicle-page'>
            <AddVehicleContent customerId={id}/>
        </div>
    )
}