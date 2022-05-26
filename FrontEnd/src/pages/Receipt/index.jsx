import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';

/**
 * payer
 * amount
 * repair type (description)
 * additional info
 * total time
 * technician
 */
export default function Receipt() {
    // getting order
    let history = useLocation();
    let [order, _] = useState(history.state.order);
    console.log(order);

    return (
        <div className='Receipt'>
            <h1>Payer: {order.payer.name.given_name}</h1>
            <h1>Amount: ${order.purchase_units[0].amount.value}</h1>
            <h1>Description: {order.purchase_units[0].description}</h1>
        </div>
    )
}
