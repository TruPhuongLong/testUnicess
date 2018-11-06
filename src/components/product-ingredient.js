import React from 'react';
import PropTypes from 'prop-types';

import urlIngredient1 from '../assets/ingredient1.png';

const ProductIngredient = (props) => {

    const styles = {
        image: {
            height: '300px'
        },
        content: {
            padding: '20px 10px 75px 10px'
        }
    }

    return (
        <div >
            <div style={styles.image}>
                <img src={props.urlIngredient} alt="" />
            </div>
            <p style={styles.content}>{props.content}</p>
        </div>
    );
}

ProductIngredient.propTypes = {
    urlIngredient: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired 
}

export default ProductIngredient;

