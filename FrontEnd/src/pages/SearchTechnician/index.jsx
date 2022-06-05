import React from 'react'
import SearchTechnicianContent from '../../components/SearchTechnicianContent'
import {useLocation} from "react-router-dom";

export default function SearchTechnician() {
    const {state} = useLocation();
    return (
        <div className='search-technician-page'>
            <SearchTechnicianContent jobId={state.jobId}/>
        </div>
    )
}