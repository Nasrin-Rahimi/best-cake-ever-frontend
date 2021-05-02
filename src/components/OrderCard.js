
import React,{useState} from 'react';
import MyOrderDetails from './MyOrderDetails';

const OrderCard = ({ order }) => {

    const [orderDetails,setOrderDetails]=useState(false);

    const extraContent =
    <div>
      <p className="OrderDetail">
        <MyOrderDetails orderId = {order.id} />
      </p>
    </div>


    return (
        <div className="OrderCard">
        <a className="OrderDetailsLink" onClick={()=>{setOrderDetails(!orderDetails)}}>
          <h3>{order.attributes.order_Date}</h3>
        </a>
      {orderDetails && extraContent}
      </div>
        // <p>Order Date: {order.attributes.order_Date}</p>
    )
}

export default OrderCard