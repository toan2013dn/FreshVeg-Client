import './final-order.styles.scss'

import { Link } from 'react-router-dom'

function FinalOrder() {
  return (
    <div className="final-order">
      <div className="final-order--title">
        <h4>Đơn Hàng Của Bạn</h4>
        <div className="line"></div>
      </div>
      <div className="final-order--details">
        <div className="final-order--details-left">
          <h4>Sản Phẩm</h4>
          <div className="line"></div>
          <div className="products">
            <h4>Nước cam</h4>
            <h4>x1</h4>
          </div>
          <div className="line"></div>

          <h4>Phí Vận Chuyển</h4>
          <div className="line"></div>
          <h4>Thanh Toán</h4>
        </div>
        <div className="final-order--details-right">
          <h4>Thành Tiền</h4>
          <div className="line"></div>
          <h4>50.000đ</h4>
          <div className="line"></div>
          <h4>50.000đ</h4>
          <div className="line"></div>
          <h4>300.000đ</h4>
        </div>
      </div>
      <button className="home-products--button">
        <Link to={''} style={{ fontSize: '22px' }}>
          Đặt Hàng
        </Link>
      </button>
    </div>
  )
}

export default FinalOrder
