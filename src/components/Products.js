import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';

const Products = (props) => {

    const category_id = props.match.params.category_id
    const categoryProducts = props.Products.filter(product => product.attributes.category_id == category_id)
    const productCards = categoryProducts.map(product => <ProductCard product={product} key={product.id} />)
    const category = props.Categories.find(category => category.id == category_id)
    
    return (
        <div className="Products" >
            <h2>{category.attributes.name}</h2>
            {productCards.length > 0 ? productCards : <h3>There isn't any product in this category!</h3>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Products: state.products,
        Categories: state.categories
    }
}

export default connect(mapStateToProps)(Products)