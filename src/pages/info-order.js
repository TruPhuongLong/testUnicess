import React from 'react';
import './info-order.css'
import $ from 'jquery';
import Header from '../components/header';
import Footer from '../components/footer';
import url from '../assets/product-sua.jpg'
class InfoOrder extends React.Component {

    componentDidMount() {
        // Choose mount product

        // Subbtract product
        var $sub = $('#btn-sub');
        var $input = $('#count-val');
        // On key up Input
        $input.keyup(function () {
            var t = $input.val();
            uppDate(t);
        })

        function uppDate(c) {
            var currentProduct = {};
            currentProduct.price = 2000;
            var $result = currentProduct.price * c;
            $('#d-total').val($result);
        }
        $sub.click(function () {
            var $count = $input.val();
            if ($count == 0 || $count < 1) {
                alert("Bạn Phải Chọn Ít Nhất 1 Sản Phẩm");
            } else {
                $count--;
                $input.val($count);
                uppDate($count);
            }
        })
        // Add product	
        var $add = $('#btn-add');
        $add.click(function () {

            var $count = $input.val();
            $input.val(++$count);
            uppDate($count);
        })

        // Click Popup 
        var $click = $('#muangay');
        $click.click(function () {
            $('.d-popup').fadeIn(1000);
        })

        var $close = $('#btn-close');
        $close.click(function () {
            $('.d-popup').fadeOut(1000);
        })

        // So Luong
    }

    render() {
        return (
            <div>
                <Header />

                <div className="d-if-order">
                    <div className="d-popup">
                        <p>Don Hang Cua Ban Da Tao Thanh Cong</p>
                        <span>Cam On Ban Da Su Dung Dich Vu Cua Chung Toi</span>
                        <span className="d-btn-check" id="btn-close"><i className="far fa-check-circle"></i></span>
                    </div>
                    <h3>Thong tin don hang</h3>
                    <form action="#" className="d-form-order">
                        <div className="d-input-order">
                            <label htmlFor="#">1. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <div className="d-input-order">
                            <label htmlFor="#">2. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <div className="d-input-order">
                            <label htmlFor="#">3. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <div className="d-input-order">
                            <label htmlFor="#">4. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <div className="d-input-order">
                            <label htmlFor="#">5. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <div className="d-input-order">
                            <label htmlFor="#">6. Thong tin don hag</label>
                            <input type="text" />
                        </div>
                        <label>7. San Pham</label>
                        <div className="d-product">
                            <div className="d-img-product">
                                <img src={url} alt="" />
                            </div>
                            <div className="d-des-product">
                                <div className="d-name">
                                    <p>Ten san pham: <span>Numero</span></p>
                                </div>
                                <div className="d-count">
                                    <p>So luong:</p>
                                    <div className="d-choose">
                                        <span className="d-btn-choose"><button type="button" id="btn-sub">-</button></span>
                                        <input type="text" value="1" min="1" max="1000" id="count-val" className="d-input-choose" />
                                        <span className="d-btn-choose"><button type="button" id="btn-add">+</button></span>
                                    </div>
                                </div>
                                <div className="d-howmuch">
                                    <p>Thanh tien: <input type="text" value="2000" min="2000" max="1000" id="d-total" style={{ border: 'none', width: '100px' }} />vnd</p>
                                </div>
                                <div className="d-submit">
                                    <button type="button" id="muangay">Mua Ngay</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        );
    }
}


export default InfoOrder;
