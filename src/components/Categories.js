import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';

const Categories = (props) => {
    
    const categoryCards = props.Categories.map(category => <CategoryCard category={category} key={category.id} />)

    return(
        <div className="Categories">
            {categoryCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        Categories: state.categories
    }
}

export default connect(mapStateToProps)(Categories)

