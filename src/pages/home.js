import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { incAction } from '../redux/actions/count.action';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProductIngredientRow } from '../components/product-ingredient-row';
import {ProductModel} from '../models/product.model';

import ReviewRow from '../components/review-row';
import Product from '../components/product';
import urlIngredient1 from '../assets/ingredient1.png';
import urlIngredient2 from '../assets/ingredient2.png';
import urlIngredient3 from '../assets/ingredient3.png';
import urlCustomer1 from '../assets/client1.png';
import urlCustomer2 from '../assets/client2.png';
import urlCustomer3 from '../assets/client3.png';
import urlCustomer4 from '../assets/client4.png';
import urlCustomer5 from '../assets/client5.png';
import urlCustomer6 from '../assets/client6.png';
import urlVote1 from '../assets/review_1-09.jpg';
import urlVote2 from '../assets/review_2-09.jpg';
import urlVote3 from '../assets/review_3-09.jpg';
import urlVote4 from '../assets/review_4-09.jpg';
import urlVote5 from '../assets/review_5-09.jpg';

import urlProduct from '../assets/img-des.jpg';


class Home extends React.Component {

    dataProductIngredient = [
        { url: urlIngredient1, content: 'Chứa hơn 20 loại vitamin. Mang lại sức sống cho dôi mắt mệt mỏi' },
        { url: urlIngredient2, content: 'làm sạch và săn chắc da, đẩy mạnh quá trình tẩy, tết bào chết. Hạn chế tích trữ độc tố, duy trì làn da khỏe mạnh' },
        { url: urlIngredient3, content: '2 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '3 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '4 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '3 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '3 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '3 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' },
        { url: urlIngredient3, content: '3 Giữ ấm và làm sạch da, thanh lọc độc tố. Vitamin K giúp cải thiện sắc tố da hồng hào' }
    ]
    dataReview = [
        { urlCustomer: urlCustomer1, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote1 },
        { urlCustomer: urlCustomer2, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote2 },
        { urlCustomer: urlCustomer3, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote3 },
        { urlCustomer: urlCustomer4, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote4 },
        { urlCustomer: urlCustomer5, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote5 },
        { urlCustomer: urlCustomer6, content: 'Mặt này có nhiều tinh chất lắm luôn. Có các điểm mát xa trên mặt rất hay.', urlVote: urlVote5 }
    ]


    initProductData = () => {
        this.productData = new ProductModel();
        this.productData.nameVietNamese = 'Mat na';
        this.productData.nameEnglish = 'Numero 5. Vital Mask Pack';
        this.productData.content = "Chiếc mặt nạ đáp ứng nhu cầu chăm sóc da hằng ngày cho phụ nữ hiện đại. Chỉ với 5 phút massgae - 5 điểm nhấn trên mặt nạ cùng Numero 5 sẽ mang lại hiệu quả tuyệt vời.";
        this.productData.contentDetail = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos dolore doloremque exercitationem accusamus sit dignissimos minima cumque magnam omnis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quos dolore doloremque exercitationem accusamus sit dignissimos minima cumque magnam omnis. Suscipit magni odit saepe natus debitis sint distinctio similique velit.";
        this.productData.imageUrls = [urlProduct]
    }
    

    ProductIngredientRowOption = {
        kindScreen: 'md',
        cols: 3
    }

    constructor(props){
        super(props);
        this.initProductData();
    }

    render() {

        return (
            <div>
                <Product product={this.productData}/>

                <section style={{ margin: 'auto' }}>
                    {
                        this.dataProductIngredient.map((item, index, array) => {
                            if (index % this.ProductIngredientRowOption.cols === 0) {
                                return (
                                    <ProductIngredientRow
                                        key={index}
                                        option={this.ProductIngredientRowOption}
                                        index={index}
                                        arrayIngredient={array}
                                    />
                                )
                            }
                        })
                    }
                </section>

                <section className="review">
                    <div className="header-review">
                        <span></span>
                        <h3>Review</h3>
                    </div>
                    <div class="contain-review">
                        {
                            this.dataReview.map((item, index, array) => {
                                if (index % 2 === 0) {
                                    return <ReviewRow key={index} data={[array[index], array[index + 1]]} />
                                }
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
    // console.log(state)
    // console.log(n);
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Home));


/**
 * 
 * .ingredient {
	width: 100%;
	text-align: center;
	display: table;
	margin-top: 50px;
}
.ingredient-img {
	height: 300px;
}
 */