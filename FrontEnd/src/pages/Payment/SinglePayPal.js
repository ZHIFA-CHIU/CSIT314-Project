import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let test = {
  description: "Flat Types Serivce",
  amount: {
    currency_code: "AUD",
    value: 200
  }
};

export default function SinglePaypal() {
  const navigate = useNavigate();
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              test
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          navigate("/Receipt", { state: { order } });
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