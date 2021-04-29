import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';

const Products = (props) => {

    const category_id = props.match.params.category_id
    const categoryProducts = props.Products.filter(product => product.attributes.category_id == category_id)
    const productCards = categoryProducts.map(product => <ProductCard product={product} key={product.id} />)

    return (
        <div className="Products" >
            {console.log(props)}
            {productCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Products: state.products
    }
}

export default connect(mapStateToProps)(Products)