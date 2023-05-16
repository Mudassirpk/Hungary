import React from 'react'

import OrderedItem from './OrderedItem'

type Props = {}

function CheckoutBill({}: Props) {
  return (
    <div className='checkout-bill'>
        <div className="bill-header">
            <p>Item</p>
            <p>Qty</p>
            <p>Price</p>
        </div>
        <div className="bill-details">
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
        </div>
    </div>
  )
}

export default CheckoutBill