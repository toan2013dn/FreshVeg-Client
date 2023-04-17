import './success-bill.styles.scss'

import { Link, useNavigate } from 'react-router-dom'
import { useBillInfoStore, useOrderInfoStore } from '@/store'

import Success from '@mui/icons-material/CheckCircleOutline'
import Bill from './Bill/bill.component'

function SuccessBill() {
  const [setBillInfo] = useBillInfoStore((state) => [state.setBillInfo])
  const [setOrderInfo, setOrderNote] = useOrderInfoStore((state) => [state.setOrderInfo, state.setOrderNote])
  const navigate = useNavigate()
  const handleClickToHome = () => {
    setBillInfo(null)
    setOrderInfo(null)
    setOrderNote('')
    navigate('/')
  }

  return (
    <div className="success-bill">
      <div className="success-bill--header">
        <Success />
        <h3>ĐẶT HÀNG THÀNH CÔNG</h3>
        <p style={{ fontSize: '20px' }}>Cảm ơn bạn đã tin tưởng và sử dụng dịch vụ của FreshVeg.</p>
      </div>

      <Bill />

      <button className="home-products--button" style={{ fontSize: '20px' }} onClick={handleClickToHome}>
        <Link onClick={handleClickToHome}>Trang Chủ</Link>
      </button>
    </div>
  )
}

export default SuccessBill
