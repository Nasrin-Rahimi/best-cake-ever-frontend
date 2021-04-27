import React from 'react';
import { connect } from 'react-redux';
import OrderCard from './OrderCard';

const MyOrders = (props) => {
    const orderCards = props.orders.map(order => <OrderCard order={order} key={order.id} />)
    return(
        <div>
            {/* { orderCards.length > 0 ? orderCards : null } */}
            { orderCards }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.myOrders
    }
}

export default connect(mapStateToProps)(MyOrders)