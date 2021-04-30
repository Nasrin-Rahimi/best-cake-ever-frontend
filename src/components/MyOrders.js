import React from 'react';
import { connect } from 'react-redux';
import OrderCard from './OrderCard';

const MyOrders = (props) => {
    const orderCards = props.orders.map(order => <OrderCard order={order} key={order.id} />)
    return(
        <div className="MyOrders">
            {orderCards.length > 0 ? orderCards : <h3>You don't have any order!</h3>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.myOrders
    }
}

export default connect(mapStateToProps)(MyOrders)