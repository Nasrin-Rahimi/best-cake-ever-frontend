import React from 'react';

const CategoryCard = ({ category }) => {
    return (
        <p>Name: {category.attributes.name}</p>
    )
}

export default CategoryCard