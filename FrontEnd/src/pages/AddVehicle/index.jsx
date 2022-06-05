import React, { useState } from 'react'
import AddVehicleContent from '../../components/AddVehicleContent'
import { useLocation } from "react-router-dom";
import Banner from "../../components/Banner";

export default function AddVehicle() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='addVehicle-page'>
            <Banner dashboard={true} id={id} to={"CustomerDashboard"} />
            <AddVehicleContent customerId={id} />
        </div>
    )
}