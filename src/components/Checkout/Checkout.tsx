import React from "react";
import "./checkout.scss";
type Props = {};

// components
import CheckoutHeader from "./CheckoutHeader";
import CheckoutBill from "./CheckoutBill";

function Checkout({}: Props) {
  return (
    <section className="checkout">
      {/* child components section */}
      <CheckoutHeader />
      <CheckoutBill />

      {/* totals section */}
      <div className="totals">
        <div className="discount">
          <p>Discount</p>
          <p>$ 0</p>
        </div>
        <div className="sub-total">
          <p>Sub-Total</p>
          <p>$ 49</p>
        </div>
      </div>

      {/* payment button section */}
      <div className="pay">
        <button>Continue Payment</button>
      </div>
    </section>
  );
}

export default Checkout;
