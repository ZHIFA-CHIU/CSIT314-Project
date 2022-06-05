import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import AddBankContent from '../../components/AddBankContent'

export default function AddBank() {
    const history = useLocation();
    let [id] = useState(history.state.id);
    return (
        <div>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            <AddBankContent technicianId={id} />
        </div>
    )
}