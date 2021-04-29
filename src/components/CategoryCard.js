import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    return (
        <div className="CategoryCard">
            <Link to={`/categories/${category.id}/products`} className="categoryLink">
                <img src={category.attributes.image} className="image" />
                {category.attributes.name}
            </Link>
        </div>
    )
}

export default CategoryCard