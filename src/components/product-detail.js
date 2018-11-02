import React from 'react';
import {Link} from 'react-router-dom';

import urlIngredient1 from '../assets/ingredient1.png';

const ProductDetail = ({ onShrink = f => f }) => {
    return (
        // <!-- View More id="hide"-->
		<section>
			<span></span>
			<div className="hide-parent">
				<div className="intro-video">
					<img src={urlIngredient1} alt=""/>
				</div>
				<div className="description-video">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos dolore doloremque exercitationem accusamus sit dignissimos minima cumque magnam omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos dolore doloremque exercitationem accusamus sit dignissimos minima cumque magnam omnis. Suscipit magni odit saepe natus debitis sint distinctio similique velit.</p>
					<div className="btn-viewmore">
						<button onClick={onShrink} style={{backgroundColor: '#d8d8d8'}} id="hide-off">Ẩn Bớt</button>
						<Link to="/order"><button style={{backgroundColor: '#ffe72c'}}>Sản Phẩm</button></Link>
					</div>
				</div>
			</div>
		</section>
    )
}

export default ProductDetail;