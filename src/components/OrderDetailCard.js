import React from 'react';
import { connect } from 'react-redux';

const OrderDetailCard = ({ orderdetail, products }) => {

    const product = products.find(product => product.id == orderdetail.attributes.product_id)
    return (
        <div className="OrderDetailCard">
            <strong>{product.attributes.name}</strong> - 
            <strong>${product.attributes.unit_price.toFixed(2)}</strong> - 
             {product.attributes.weight} 
            <br /><br />
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(OrderDetailCard)

