import React from 'react'
import Banner from '../../components/Banner'
import CustomerDashboardContent from '../../components/CustomerDashboardContent/index.jsx'

export default function CustomerDashboard() {
    return (
        <div className='customerdashboard-page'>
            <Banner />
            <CustomerDashboardContent />
        </div>
    )
}