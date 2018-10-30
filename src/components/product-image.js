import React from 'react';
import imgUrl from '../assets/product-sua.jpg'
import test from '../assets/test.jpg'


const ProductImage = ({url = imgUrl}) => {
    return (
        <div style={{width: '350px', height: '450px',}}>
            <img src={imgUrl} alt="product" style={{width: '100%', height: 'auto', border: '1px solid red'}}/>
        </div>
    )
}
export default ProductImage;