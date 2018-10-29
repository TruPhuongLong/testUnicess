import React from 'react';
import './info-order.css'

class InfoOrder extends React.Component {


    render() {
        return (
            <div className="d-if-order">
                <h3>Thong tin don hang</h3>
                <form action="#" className="d-form-order">
                    <div className="d-input-order">
                        <label for="#">1. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <div className="d-input-order">
                        <label for="#">2. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <div className="d-input-order">
                        <label for="#">3. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <div className="d-input-order">
                        <label for="#">4. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <div className="d-input-order">
                        <label for="#">5. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <div className="d-input-order">
                        <label for="#">6. Thong tin don hag</label>
                        <input type="text" />
                    </div>
                    <label>7. San Pham</label>
                    <div className="d-product">
                        <div className="d-img-product">
                            <img src="./img/logo.jpg" alt="" />
                        </div>
                        <div className="d-des-product">
                            <div className="d-name">
                                <p>Ten san pham: <span>Numero</span></p>
                            </div>
                            <div className="d-count">
                                <p>So luong:</p>
                                <div className="d-choose">
                                    <span className="d-btn-choose"><button type="button">-</button></span>
                                    <input type="text" value="1" min="1" max="1000" className="d-input-choose" />
                                    <span className="d-btn-choose"><button type="button">+</button></span>
                                </div>
                            </div>
                            <div className="d-howmuch">
                                <p>Thah tien: <span>2.000vnđ</span></p>
                            </div>
                            <div className="d-submit">
                                <button type="button" onclick="orderSucess();">Mua Ngay</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default InfoOrder;
