import React from 'react';

const OrderCard = ({ order }) => {
    return (
        <p>Order Date: {order.attributes.order_Date}</p>
    )
}

export default OrderCard