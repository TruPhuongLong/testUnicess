import React from 'react';
import imgUrl from '../assets/pic_trulli.jpg'


const ProductImage = ({url = imgUrl}) => {
    return (
        <div>
            <img src={url} alt="product" />
        </div>
    )
}
export default ProductImage;