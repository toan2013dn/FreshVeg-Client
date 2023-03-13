import './success-bill.styles.scss'

import { Link } from 'react-router-dom'

import Success from '@mui/icons-material/CheckCircleOutline'
import Bill from './Bill/bill.component'

function SuccessBill() {
  return (
    <div className="success-bill">
      <div className="success-bill--header">
        <Success />
        <h2>ĐẶT HÀNG THÀNH CÔNG</h2>
        <p style={{ fontSize: '20px' }}>
          Đơn hàng của bạn đã được đặt thành công. Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của FreshVeg.
        </p>
      </div>

      <Bill />

      <button className="home-products--button">
        <Link to={'/'} style={{ fontSize: '24px' }}>
          Trang Chủ
        </Link>
      </button>
    </div>
  )
}

export default SuccessBill
