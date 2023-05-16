import React from "react";
import "./checkout.scss";
type Props = {};

// components
import CheckoutHeader from "./CheckoutHeader";
import CheckoutBill from "./CheckoutBill";

function Checkout({}: Props) {
  return (
    <section className="checkout">
      <CheckoutHeader />
      <CheckoutBill />
    </section>
  );
}

export default Checkout;
