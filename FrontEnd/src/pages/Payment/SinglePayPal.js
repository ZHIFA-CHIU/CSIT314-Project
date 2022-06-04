import React, {useRef, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getJob} from "../../api";

export default function SinglePaypal({paymentInfo, jobId}) {
    const navigate = useNavigate();
    const paypal = useRef();

    useEffect(() => {
        let jobPrice;
        getJob(jobId).then(
            response => {
                jobPrice = parseFloat(response.data.jobPrice).toFixed(2)
            }
        ).catch(
            err => alert(err)
        )

        window.paypal
            .Buttons({
                createOrder: (data, actions, err) => {
                    paymentInfo["amount"]["value"] = jobPrice
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            paymentInfo
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);
                    navigate("/Receipt", {state: {"order": order, "jobId": jobId}});
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}