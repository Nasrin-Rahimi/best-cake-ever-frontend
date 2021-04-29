import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div className="CategoryCard">
            <img src={category.attributes.image} className="image" />
            <p>{category.attributes.name}</p>
        </div>
    )
}

export default CategoryCard