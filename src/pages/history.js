import React from 'react';

export default class History extends React.Component {
    render() {
        return (
            <div className="h-history-wr">
                <div className="h-cntn">
                    <div className="h-header-history">
                        <h3>Thông tin đơn hàng</h3>
                    </div>
                    <div className="h-cntn-box">
                        <div className="h-info-client">
                            <div className="h-cntn-client">
                                <p>Khách hàng: </p><span>Nguyễn Văn An</span>
                            </div>
                            <div className="h-cntn-client">
                                <p>Email: </p><span>congchuangutorngrung113@gmail.com</span>
                            </div>
                            <div className="h-cntn-client">
                                <p>Số điện thoại: </p><span>0978 113 113</span>
                            </div>
                            <div className="h-cntn-client">
                                <p>Đặt ngày: </p><span>01/11/2018</span>
                            </div>
                            <div className="h-cntn-client">
                                <p>Địa chỉ: </p><span>37/4 Phan Tây Hồ, phường 7, Phú Nhuận, tp. Hồ Chí Minh.</span>
                            </div>
                        </div>
                        <div className="h-info-prodct">
                            <h2 style={{backgroundColor: '#ebeced'}}>Sản Phẩm</h2>
                            <div className="h-product">
                                <div className="h-info-product">
                                    <p>Sản Phẩm: </p><span style={{color: '#d0021b'}}>Numero 5. Vita Mask Pack</span>
                                </div>
                                <div className="h-info-product">
                                    <p>Giá bán: </p><span>380.000đ</span>
                                </div>
                                <div className="h-info-product">
                                    <p>Số lượng: </p><span>01</span>
                                </div>
                                <div className="h-info-product">
                                    <p>Phí giao hàng: </p><span>11.000đ</span>
                                </div>
                            </div>
                            <div className="h-total">
                                <p>Tổng cộng: <span>391.000đ</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

