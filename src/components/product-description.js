import React from 'react';
import imgUrl from '../assets/pic_trulli.jpg'


const ProductDescription = ({ onDetail = f => f, onBuyNow = f => f, showDetail = false }) => {
    return (
        <div>
            <h1>Some text</h1>
            <h2>Some text</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {
                showDetail ? null :
                    <span>
                        <button className="btn btn-default" onClick={onDetail} style={{marginRight: '100px'}}>Detail</button>
                        <button className="btn btn-success" onClick={onBuyNow}>buy now</button>
                    </span>
            }

        </div>
    )
}
export default ProductDescription;