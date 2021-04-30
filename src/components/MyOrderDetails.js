import React from 'react';
import { connect } from 'react-redux';
import OrderDetailCard from './OrderDetailCard';

const MyOrderDetails = (props) => {
    console.log(props)

    const orderDetails = props.orderdetails.filter(orderdetail => orderdetail.attributes.order_id == props.orderId)
    const orderDetailCards = orderDetails.map(orderdetail => <OrderDetailCard orderdetail={orderdetail} key={orderdetail.id} />)
    return(
        <div className="MyOrderDetails">
            {orderDetailCards.length > 0 ? orderDetailCards : <h3>You don't have any order detail!</h3>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orderdetails: state.myOrderDetails
    }
}

export default connect(mapStateToProps)(MyOrderDetails)