import './order-confirm.styles.scss'

import Header from '@/components/Header/header.component'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import ConfirmInfo from '@/components/ConfirmInfo/confirm-info.component'
import Footer from '@/components/Footer/footer.component'
import Decoration from '@/assets/images/Decoration.webp'
import { useState } from 'react'

function OrderConfirm() {
  const [isOpenModal, setIsOpenModal] = useState(false)

  return (
    <div className="order-confirm">
      <div className="order-confirm--header">
        <Header />
        <div className="line"></div>
      </div>

      <div className="container">
        <div className="order-confirm--links">
          <NavLink to="/">Trang chủ</NavLink>
          <Next />
          <NavLink to="/order-detail">Giỏ Hàng</NavLink>
          <Next />
          <NavLink to="/order-confirm">Thanh Toán</NavLink>
        </div>

        <div className="order-confirm--title">
          <h3>Xác Nhận Thanh Toán</h3>
          <div className="line"></div>
        </div>

        <ConfirmInfo />
      </div>

      <div className="order-confirm--image">
        <img src={Decoration} alt="decoration" />
      </div>

      <Footer />
    </div>
  )
}

export default OrderConfirm
