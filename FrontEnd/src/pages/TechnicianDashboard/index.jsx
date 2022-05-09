import React from 'react'
import Banner from '../../components/Banner'
import TechnicianDashboardContent from '../../components/TechnicianDashboardContent/index.jsx'

export default function TechnicianDashboard() {
    return (
        <div className='techniciandashboard-page'>
            <Banner />
            <TechnicianDashboardContent />
        </div>
    )
}