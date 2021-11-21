import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Jw42MJOMPLKDFPJUcz8MyFFYmf1CDoucZubivHHgmJGVNALSosYChSB8X69BH8ZH8USPQorXz7llrdxOVR935J500PuNOBKXE"
);
const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please pay for: {appointment.patientName}, for {appointment.serviceName}{" "}
      </h2>
      <h4>Price: {appointment.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment} />
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. elements
4. checkout form
-----
5. create payment method
6. server create payment intent api
7. load client secret
8. confirmCard payment 
9. handle user error
*/
