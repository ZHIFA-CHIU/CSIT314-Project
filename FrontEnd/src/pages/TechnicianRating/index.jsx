import React, {useState} from 'react'
import TechnicianRatingContent from '../../components/TechnicianRatingContent'
import {useLocation} from "react-router-dom";
import Banner from "../../components/Banner";

export default function ServiceRequest() {
    const history = useLocation();
    let [id] = useState(history.state.id);
    return (
        <div className='review-page'>
            <Banner to={"TechnicianDashboard"} dashboard={true} id={id} />
            <TechnicianRatingContent technicianId={id}/>
        </div>
    )
}