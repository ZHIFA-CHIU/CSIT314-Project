import React from 'react'
import SinglePaypal from './SinglePayPal'
import styles from "./PaymentStyle.css"

export default function Payment({ paymentInfo, jobId }) {
    return (
        <div className={styles.payment}>
            <SinglePaypal paymentInfo={paymentInfo} jobId={jobId} />
        </div>
    )
}