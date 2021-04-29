import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <div className="CategoryCard">
            <img src={category.attributes.image} className="image" />
            {category.attributes.name}
        </div>
    )
}

export default CategoryCard