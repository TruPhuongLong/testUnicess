import React from 'react';
import urlIngredient1 from '../assets/ingredient1.png';

class ProductIngredient extends React.Component {
    render() {
        return (
            <div className="element">
                <div className="ingredient-img">
                    <img src={this.props.urlIngredient} alt="" />
                </div>
                <p>{this.props.content}</p>
            </div>
        );
    }
}

ProductIngredient.defaultProps = {
    urlIngredient: urlIngredient1,
    content: 'Chứa hơn 20 loại vitamin. Mang lại sức sống cho dôi mắt mệt mỏi'
}

export default ProductIngredient;
