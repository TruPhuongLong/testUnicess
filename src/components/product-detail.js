import React from 'react';
import Forever from '../assets/forever.MP4'

const ProductDetail = ({onBuyNow = f => f, onShrink = f => f}) => {
    return (
        <div className="row" style={{textAlign: "center"}}>
            <div className="col-md-6">
                <video width="350" height="300" controls>
                    <source src={Forever} type="video/mp4" />
                    browser not support!
                </video>
            </div>
            <div className="col-md-6">
                <p>sfs fsfs fs fsfs fs fsf sf sfs fs fs fs fs fs fs fs fs fsf sf sf sfs fs fs fs fs fs fs fs</p>
                <button className="btn btn-default" onClick={onShrink} style={{marginRight: '100px'}}>Shrink</button>
                <button className="btn btn-success" onClick={onBuyNow}>buy now</button>
            </div>
        </div>
    )
}

export default ProductDetail;