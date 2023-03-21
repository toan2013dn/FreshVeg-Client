import './order-detail.styles.scss'

import { NavLink } from 'react-router-dom'
import { ReactComponent as Next } from '@/assets/icons/Next.svg'
import Footer from '@/components/Footer/footer.component'
import Header from '@/components/Header/header.component'
import OrderDetailTable from './OrderDetailTable/order-detail-table.component'

function OrderDetail() {
  return (
    <div className="order-detail">
      <Header />

      <div className="container">
        <div className="order-detail--links">
          <NavLink to="/">Trang chủ</NavLink>
          <Next />
          <NavLink to="/order-detail">Giỏ Hàng</NavLink>
        </div>

        <div className="order-detail--title">
          <h3>Chi Tiết Đơn Hàng</h3>
          <div className="line"></div>
        </div>

        <div className="order-detail--table">
          <OrderDetailTable />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default OrderDetail
