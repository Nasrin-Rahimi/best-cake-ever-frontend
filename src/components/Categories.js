import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';
import { getCategories } from '../actions/categories';

const Categories = (props) => {

    props.getCategories()
    
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

export default connect(mapStateToProps, { getCategories })(Categories)

