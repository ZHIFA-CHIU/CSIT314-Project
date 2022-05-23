import React from 'react'
import Banner from '../../components/Banner'
import ListJobsContent from '../../components/ListJobsContent/index.jsx'

export default function AcceptJob() {
    return (
        <div className='listjobs-page'>
            <Banner />
            <ListJobsContent />            
        </div>
    )
}