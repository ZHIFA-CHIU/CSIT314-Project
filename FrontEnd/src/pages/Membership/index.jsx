import React, {useState} from 'react'
import Banner from '../../components/Banner'
import MembershipContent from '../../components/MembershipContent'
import {useLocation} from "react-router-dom";

export default function Membership() {
    let history = useLocation();
    let [id, _] = useState(history.state.customerId);

    return (
        <div className='membership-page'>
            <Banner />
            <MembershipContent id={id} />
        </div>
    )
}