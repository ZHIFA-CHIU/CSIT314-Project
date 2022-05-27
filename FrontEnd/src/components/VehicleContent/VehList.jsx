import React, {useEffect, useState} from 'react'
import VehItem from './VehItem.jsx'
import {getVehicle} from "../../api";

/**
 * Gets a list of vehicles to display
 * @returns {JSX.Element}
 * @constructor
 */
const VehList = ({customerId}) => {
    const [vehicleList, setVehicleList] = useState([])

    useEffect(() => getVehicle(customerId).then(
        response => {
            setVehicleList(response.data)
        }
    ), [])

    return (
        <div>
            <h1>Vehicle Details</h1>
            {vehicleList.map((item, key) =>
                <VehItem key={key} {...item}/>
            )}

        </div>
    );
};

export default VehList;