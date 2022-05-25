import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import TechnicianDetailContent from '../../components/TechnicianDetailContent'

export default function TechnicianDetail() {
    const history = useLocation();
    let [id, _] = useState(history.state.id);
    return (
        <div>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            <TechnicianDetailContent id={id} />
        </div>
    )
}
