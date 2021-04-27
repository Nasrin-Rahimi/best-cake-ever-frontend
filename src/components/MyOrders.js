import React from 'react';
import { connect } from 'react-redux';

const MyOrders = () => {
    return(
        <div>
            MyOrders
        </div>
    )
}

const mapStateToProps = state => {
    return {
        orders: state.myOrders
    }
}

export default connect(mapStateToProps)(MyOrders)