import React from 'react';

const OrderDetailCard = ({ orderdetail }) => {
    return (
        <div className="OrderDetailCard">
            {orderdetail.attributes.order_id}<br/>
        </div>
    )
}

export default OrderDetailCard

