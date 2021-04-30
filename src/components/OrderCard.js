
import React,{useState} from 'react';

const OrderCard = ({ order }) => {
    console.log(order.relationships.orderdetails.data)
    const [orderDetails,setOrderDetails]=useState(false);
    const extraContent=<div>
      <p className="OrderDetail">
        Order Detail
      </p>
  </div>


    return (
        <div className="test">
        <a className="OrderDetailsLink" onClick={()=>{setOrderDetails(!orderDetails)}}><h3>{order.attributes.order_Date}</h3></a>
      {orderDetails && extraContent}
      </div>
        // <p>Order Date: {order.attributes.order_Date}</p>
    )
}

export default OrderCard