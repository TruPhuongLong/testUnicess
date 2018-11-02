import React from 'react';
import urlInfomation from '../assets/information.svg'

export default class ThankYou extends React.Component {
    render() {
        return (
            <div className="t-thank-wr">
                <div className="t-box">
                    <div className="t-icon">
                        <span><img src={urlInfomation} alt="" /></span>
                    </div>
                    <div className="t-cntn-box">
                        <p className="t-status">Đơn hàng của bạn đã được tạo thành công!</p>
                        <p className="t-thankyou">Cảm ơn bạn đã đặt hàng của chúng tôi!</p>
                        <p className="t-callback">Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất để xác nhận đơn hàng.</p>
                        <p className="t-contact">Mọi thắc mắc xin liên hệ Hotline: 0977 805 953</p>
                    </div>
                </div>
            </div>
        )
    }
}