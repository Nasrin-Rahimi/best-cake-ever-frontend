import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="ProductCard">
            {/* <Link to={`/categories/${product.category_id}/products/${product.id}`} className="productLink"> */}
                <img src={product.attributes.image} className="image" />
                {product.attributes.name}<br/>
                ${product.attributes.unit_price.toFixed(2)}<br/>
                {product.attributes.weight}<br/>
                {/* <button>Description</button> */}
                <button>Add to Order</button>
            {/* </Link> */}
        </div>
    )
}

export default ProductCard

