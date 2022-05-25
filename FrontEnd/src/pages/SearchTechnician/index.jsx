import React, {useState} from 'react'
import SearchTechnicianContent from '../../components/SearchTechnicianContent'
import {useLocation} from "react-router-dom";

export default function SearchTechnician() {
    let history = useLocation()
    let [id] = useState(history.state.customerId)
    return (
        <div className='search-technician-page'>
            <SearchTechnicianContent customerId={id}/>
        </div>
    )
}