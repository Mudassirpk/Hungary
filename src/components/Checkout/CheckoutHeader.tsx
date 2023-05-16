import React from "react";

type Props = {};

function CheckoutHeader({}: Props) {
  return (
    <div className="checkout-header">
      <div className="order-id">
        <p>Orders #33912</p>
      </div>
      <div className="filter-options">
        <div>
          <p>Dine In</p>
        </div>
        <div>
          <p>To Go</p>
        </div>
        <div>
          <p>Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;
