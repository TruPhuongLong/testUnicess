import React from 'react';

import urlIconCar from '../../assets/Icon_Car.png';
import urlProduct from '../../assets/product.jpg';

export default class Product extends React.Component {
    render() {
        return (
            <div className="product-wr">
                <div className="p-top-wr">
                    <div className="p-top">
                        <div className="p-breadcrum"><a href="#">Breadcreumb/Breadcreumb/Breadcreumb</a></div>
                    </div>
                </div>
                {/* <!-- 		Product		 --> */}
                <section className="p-contain-product">
                    <div className="p-info-product">
                        <div className="p-product-img">
                            <div className="p-car-freeship">
                                <img src={urlIconCar} alt="" className="p-iconcar" />
                            </div>
                            <img src={urlProduct} alt="" className="p-product-1" />
                        </div>
                        <div className="p-product-desc">
                            <div className="p-header-des">
                                <p>Sản Phẩm</p>
                                <h3>Numero 5. Vital Mask Pack</h3>
                            </div>
                            <div className="p-rating-des">
                                <div className="p-rating">
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                    <span className="rating rating-1"><i className="fas fa-star"></i></span>
                                </div>
                                <div className="p-rating-person"><a href="#">Có 4 đánh giá.</a></div>
                            </div>
                            <div className="p-product-howmuch">
                                <div className="p-price">
                                    <p>Giá bán: </p>
                                    <input type="text" value="380000đ" className="price" readOnly />
                                </div>
                                <div className="p-amount">
                                    <p>Số lượng: </p>
                                    <div className="p-choose">
                                        <button type="button" className="clickSub">-</button>
                                        <input type="text" value="1" className="mount" />
                                        <button type="button" className="clickAdd">+</button>
                                    </div>
                                </div>
                                <div className="p-price">
                                    <p>Thành tiền: </p>
                                    <input type="text" value="380000đ" className="total" readOnly="" />
                                </div>
                            </div>
                            <div className="p-product-button">
                                <button type="button" ><i className="fas fa-plus"></i>thêm vào giỏ</button>
                                <button type="button" className="p-buynow"><i className="fas fa-shopping-cart"></i>mua ngay</button>
                            </div>
                        </div>
                    </div>
                </section>
                <p className="p-line"></p>
  
                <div className="p-show-popup">
                    <div className="p-bg-opacity">
                        <div className="p-popup">
                            <p>Đã thêm <span className="p-name-product">Numero 5. Vital Mask Pack</span> vào giở hàng</p>
                            <span className="p-popup-icon"><img src="./images/verified.svg" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}