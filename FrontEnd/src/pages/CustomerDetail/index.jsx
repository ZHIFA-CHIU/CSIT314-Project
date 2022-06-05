import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../../components/Banner'
import CustomerDetailContent from '../../components/CustomerDetailContent'

export default function CustomerDetail() {
  let history = useLocation();
  let [id] = useState(history.state.customerId);
  return (
    <div>
      <Banner dashboard={true} id={id} to={"CustomerDashboard"} />
      <CustomerDetailContent id={id} />
    </div>
  )
}
