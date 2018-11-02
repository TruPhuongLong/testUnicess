import React from 'react';
import urlIconCar from '../assets/Icon_Car.png';
import urlProduct from '../assets/product.jpg'

export default class Order extends React.Component {
    render() {
        return (
            <div className="order-wr">
                <div className="o-top">
                    <div className="o-breadcrum"><a href="#">Breadcreumb/Breadcreumb/Breadcreumb</a></div>
                </div>
                {/* <!-- 		Product		 --> */}
                <section className="o-contain-product">
                    <div className="o-info-product">
                        <div className="o-product-img">
                            <div className="o-car-freeship">
                                <img src={urlIconCar} alt="" className="p-iconcar" />
                            </div>
                            <img src={urlProduct} alt="" className="p-product-1" />
                        </div>
                        <div className="o-product-desc">
                            <div className="o-header-des">
                                <p>Đơn Hàng Của Bạn</p>
                                <span></span>
                                <h3>Numero 5. Vital Mask Pack</h3>
                            </div>
                            <div className="o-rating-des">
                                <div className="o-rating">
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                </div>
                                <div className="o-rating-person"><a href="#">Có 4 đánh giá.</a></div>
                            </div>
                            <div className="o-product-howmuch">
                                <div className="o-price">
                                    <p>Giá bán: </p>
                                    <input type="text" value="380000đ" className="price" readonly />
                                </div>
                                <div className="o-amount">
                                    <p>Số lượng: </p>
                                    <div className="o-choose">
                                        <button type="button" className="clickSub">-</button>
                                        <input type="text" value="1" className="mount" />
                                        <button type="button" className="clickAdd">+</button>
                                    </div>
                                </div>
                                <div className="o-price">
                                    <p>Thành tiền: </p>
                                    <input type="text" value="380000đ" className="total" readonly="" />
                                </div>
                                <div className="o-name-client">
                                    <p>Khách hàng: </p>
                                    <span>Nguyễn Văn An</span>
                                </div>
                                <div className="o-address-client">
                                    <p>Địa chỉ: </p>
                                    <span>1A Phan Xích Long, Phường 13, quận Phú Nhuận, TP. Hồ Chí Minh</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Số điện thoại: </p>
                                    <span>0978.113.113</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Gmail: </p>
                                    <span>hoang_tu_bang_gia_2018@gmail.com</span>
                                </div>
                                <div className="o-phone-client">
                                    <p>Phí giao hàng: </p>
                                    <span>11.000đ</span>
                                </div>
                            </div>
                            <div className="o-payment">
                                <span></span>
                                <p>Tổng cộng: <span>391000đ</span></p>
                            </div>
                        </div>
                    </div>
                </section>
                <p className="o-line"></p>
                {/* <!-- product End --> */}
            </div>
        )
    }
}