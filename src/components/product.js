import React from 'react';
import ProductDescription from './product-description';
import ProductImage from './product-image';


const Product = () => {
    return (
        <div className="row">
            <div className="col-sm-6">
                <ProductDescription />
            </div>
            <div className="col-sm-6">
                <ProductImage />
            </div>
        </div>
    )
}
export default Product;