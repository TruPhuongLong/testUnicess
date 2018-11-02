import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Link} from 'react-router-dom';

import ProductDetail from './product-detail';
import urlImgDes from '../assets/img-des.jpg';



class Product extends React.Component {

    state = {
        showDetail: false
    }

    onDetail = () => {
        this.setState({
            showDetail: true
        })
    }

    onShrink = () => {
        this.setState({
            showDetail: false
        })
    }

    render() {
        return (
            <section>
                <section className="product">
                    {/* Thong Tin San Pham Start */}
                    <div className="product-info">
                        <div className="header-info">
                            <p>Mặt nạ</p>
                            <h3>Numero 5. Vital Mask Pack</h3>
                            <span></span>
                        </div>
                        <div className="contain-info">
                            <p>Chiếc mặt nạ đáp ứng nhu cầu chăm sóc da hằng ngày cho phụ nữ hiện đại. <br />Chỉ với 5 phút massgae - 5 điểm nhấn trên mặt nạ cùng Numero 5 sẽ mang lại hiệu quả tuyệt vời.</p>
                        </div>
                        <div className="btn-info" style={{ backgroundColor: 'transparent' }}>
                            <button onClick={this.onDetail} style={{ backgroundColor: '#d8d8d8' }}>xem thêm</button>
                            <Link to="/order"><button style={{ backgroundColor: '#ffe72c' }}>sản phẩm</button></Link>
                        </div>
                    </div>
                    {/* Thong Tin San Pham End */}

                    {/* <!-- Hinh Anh San Pham --> */}
                    <div className="product-img">
                        <div className="around-img">
                            <img src={urlImgDes} alt="" />
                        </div>
                    </div>
                    {/* <!-- Hinh Anh San Pham End --> */}
                </section>

                {/* product detail */}

                {

                    <ReactCSSTransitionGroup transitionName="example">
                        {
                            this.state.showDetail ? <ProductDetail onShrink={this.onShrink}/> : null
                        }
                    </ReactCSSTransitionGroup>


                }

            </section>
        )
    }

}
export default Product;