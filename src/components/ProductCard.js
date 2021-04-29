import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="ProductCard">
            <Link to={`/categories/${product.category_id}/products/${product.id}`} className="productLink">
                <img src={product.attributes.image} className="image" />
                <p>{product.attributes.name}</p>
                <p>${product.attributes.unit_price.toFixed(2)}</p>
                <p>{product.attributes.weight}</p>
            </Link>
        </div>
    )
}

export default ProductCard